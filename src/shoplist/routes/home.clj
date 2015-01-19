(ns shoplist.routes.home
            (:require [shoplist.layout :as layout]
                      [shoplist.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]))

(defn home-page []
      (layout/render
        "app.html" {:docs (util/md->html "/md/docs.md")}))

(defn save-document [doc]
  (pprint doc)
  (let [{:keys [first-name last-name]} (:doc doc)]
      {:status "ok"
       :title (str "Welcome, " first-name " " last-name "!")}))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
