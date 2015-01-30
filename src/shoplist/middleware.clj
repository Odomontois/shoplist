(ns shoplist.middleware
  (:require [taoensso.timbre :as timbre]
            [environ.core :refer [env]]
            [selmer.middleware :refer [wrap-error-page]]
            [prone.middleware :refer [wrap-exceptions]]
            [noir-exception.core :refer [wrap-internal-error]]
            [taoensso.tower.ring :refer [wrap-tower]]
            [shoplist.i18n :as i18n]))

(defn log-request [handler]
  (fn [req]
    (timbre/debug req)
    (handler req)))

(def development-middleware
  [wrap-error-page
   wrap-exceptions])

(def production-middleware
  [#(wrap-internal-error % :log (fn [e] (timbre/error e)))
   #(wrap-tower % i18n/cfg)])

(defn load-middleware []
  (concat (when (env :dev) development-middleware)
          production-middleware))
