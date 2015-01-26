(ns shoplist.routes.home
  (:require [shoplist.layout :as layout]
            [shoplist.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]
            [noir.session :as session]
            [shoplist.db.core :as db]))

(defn home-page []
  (layout/render
    "app.html" {:docs (util/md->html "/md/docs.md")}))

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

(defroutes home-routes
           (GET "/" [] (home-page))
           (GET "/doc" [] (edn (get-doc)))
           (POST "/save" {:keys [body-params]}
                 (edn (save-document body-params))))
