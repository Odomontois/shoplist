(ns shoplist.core
  (:gen-class
    :implements [org.apache.commons.daemon.Daemon]
    :init init-args
    :state state )
  (:require
    [shoplist.handler :refer [app]]
    [ring.middleware.reload :as reload]
    [org.httpkit.server :as http-kit]
    [taoensso.timbre :as timbre])

  (:import (org.apache.commons.daemon DaemonContext)))

;contains function that can be used to stop http-kit server
(defonce server
         (atom nil))

(def args (atom nil))

(defn dev? [args] (some #{"-dev"} args))

(defn parse-port [args]
  (if-let [port (->> args (remove #{"-dev"}) first)]
    (Integer/parseInt port)
    3000))

(defn- start-server [port args]
  (reset! server
          (http-kit/run-server
            (if (dev? args) (reload/wrap-reload app) app)
            {:port port})))

(defn- stop-server []
  (@server))

(defn -main [& args]
  (let [port (parse-port args)]
    (start-server port args)
    (timbre/info "a Server started on port:" port)))

(defn -init [this ^DaemonContext context] (reset! (.state this)  (vec (.getArguments context))))
(defn -start [this] (apply -main @(.state this)))
(defn -stop [this] (stop-server))
(defn -destroy [this] (reset! (.state this) []))
(defn -init-args [] [[] (atom [])])
(defn -toString [this] (str "Daemon with " @(.state this)))