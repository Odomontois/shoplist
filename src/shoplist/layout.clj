(ns shoplist.layout
  (:require [selmer.parser :as parser]
            [clojure.string :as s]
            [ring.util.response :refer [content-type response]]
            [compojure.response :refer [Renderable]]
            [environ.core :refer [env]]
            [noir.session :as session]
            [hiccup.core :refer [html]]
            [clojure.pprint :refer [pprint]])
  (:import [java.io.StringWriter]
           (java.io StringWriter)))

(parser/set-resource-path! (clojure.java.io/resource "templates"))

(deftype
  RenderableTemplate
  [template params]
  Renderable
  (render
    [_this request]
    (content-type
      (->>
        (assoc
          params
          (keyword (s/replace template #".html" "-selected"))
          "active"
          :dev
          (env :dev)
          :servlet-context
          (if-let [context (:servlet-context request)]
            (try
              (.getContextPath context)
              (catch IllegalArgumentException _ context)))
          :user-id
          (session/get :user-id))
        (parser/render-file (str template))
        response)
      "text/html; charset=utf-8")))

(deftype Page [template]
  Renderable
  (render [_this request] (content-type (response (template request)) "text/html; charset=utf-8")))

(defn hiccup-page [template] (Page. (fn [request] (html (template request)))))

(defn render [template & [params]]
  (RenderableTemplate. template params))

(defn ppstr [x] (str (doto (StringWriter.) (#(pprint x %)))))

