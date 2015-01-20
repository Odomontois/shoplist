(ns shoplist.db.core
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all]))

;; Tries to get the Mongo URI from the environment variable
;; MONGOHQ_URL, otherwise default it to localhost

(defonce db (let [uri (get (System/getenv) "MONGOHQ_URL" "mongodb://54.154.174.70/shoplist")
                  {:keys [conn db]} (mg/connect-via-uri uri)]
              db))

(def coll "users")

(defn put-user [id user]
  (mc/update db coll {:id id} {$set user} {:upsert true}))

(defn get-user [id]
  (mc/find-one-as-map db "users" {:id id}))
