(ns shoplist.db.core
  (:require [monger.core :as mg]
            [monger.operators :refer :all]
            [monger.collection :as mc]
            [environ.core :refer [env]]))

(defonce ^:dynamic db
         (let [uri (some env [:remote-mongo :mongohq-url :default-mongo])
               {:keys [conn db]} (mg/connect-via-uri uri)]
           db))

(defprotocol IEntity
  "Entity operation definition"
  (put-one [e id data] "Put single object to database with supplied id.")
  (get-one [e id]      "Read single object for supplied id"))

(defrecord Entity [^String collection]
  IEntity
  (put-one [_e id data] (mc/update db collection {:_id id} {$set data} {:upsert true}))
  (get-one [_e id] (mc/find-one-as-map db collection {:_id id})))

(defmacro defentity [& entities]
  (vec
    (for [entity entities]
      (if (coll? entity)
        (let [[ename collection] entity]
          `(def ~ename (->Entity ~collection)))
        `(def ~entity (->Entity ~(str entity)))))))

(defentity user form)

