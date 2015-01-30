(ns shoplist.layout
  (:require [selmer.parser :as parser]
            [clojure.string :as s]
            [ring.util.response :refer [content-type response]]
            [compojure.response :refer [Renderable]]
            [environ.core :refer [env]]
            [noir.session :as session]
            [hiccup.core :refer [html]]))

(parser/set-resource-path! (clojure.java.io/resource "templates"))

(deftype
  RenderableTemplate
  [template params]
  Renderable
  (render
    [this request]
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

(deftype Page [html]
  Renderable
  (render [_this _request] (content-type (response html) "text/html; charset=utf-8")))

(defn hiccup-page [syntax] (Page. (html syntax)))

(defn render [template & [params]]
  (RenderableTemplate. template params))

