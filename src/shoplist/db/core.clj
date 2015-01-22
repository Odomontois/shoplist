(ns shoplist.db.core
  (:require [monger.core :as mg]
            [monger.operators :refer :all]
            [monger.collection :as mc]))

;; Tries to get the Mongo URI from the environment variable
;; MONGOHQ_URL, otherwise default it to localhost

(defonce ^:dynamic db
         (let [uri (some #(System/getenv %) ["MONGOHQ_URL" "REMOTE_MONGO"])
               {:keys [conn db]} (mg/connect-via-uri uri)]
           db))

(defprotocol IEntity
  (put-one [e id data])
  (get-one [e id]))

(defrecord Entity [collection]
  IEntity
   (put-one [e id data] (mc/update db collection {:_id id} {$set data} {:upsert true}))
   (get-one [e id]      (mc/find-one-as-map db collection {:_id id})))

(defmacro defentity [entity collection] `(def ~entity (->Entity ~collection)))

(defentity user "users")
