(ns shoplist.routes.home
  (:require [shoplist.layout :as layout]
            [shoplist.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]
            [noir.session :as session]
            [shoplist.db.core :as db]))

(defn intro-page []
  (layout/render
    "intro.html" {:docs (util/md->html "/md/docs.md")}))

(defn save-document [doc]
  (when-let [user (session/get :user-id)]
    (db/put-one db/user user doc))
  (let [{:keys [first-name last-name]} (:doc doc)]
    {:status "ok"
     :title  (str "Welcome, " first-name " " last-name "!")}))

(defn get-doc []
  (when-let [user (session/get :user-id)]
    (let [doc (db/get-one db/user user)]
      doc)))

(defn css [url] [:link {:href (str "https://" url ".css") :rel "stylesheet"}])
(defn script [url] [:script {:src (str "https://" url ".js")}])

(defn home-page []
  [:html
   [:head
    [:title "Odopage"]
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min")
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min")]
   [:body
    [:div.container
     [:div.page-header [:h1 "List of subsites " [:small "click to enter"]]]
     [:ul
      [:li [:a {:href "/intro"} "Intro minisite"]]]]
    (script "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min")]])

(defroutes home-routes
           (GET "/" [] (layout/hiccup-page (home-page)))
           (GET  "/intro" [] (intro-page))
           (GET  "/intro/doc" [] (edn (get-doc)))
           (POST "/intro/save" {:keys [body-params]}
                 (edn (save-document body-params))))