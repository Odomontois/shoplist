(ns ^{:author "Odomontois"} shoplist.routes.home
  (:require [compojure.core :refer :all]
            [shoplist.layout :refer [hiccup-page ppstr]]
            [shoplist.util.hiccup :refer [css script]]))

(defn home-page [{:keys [t'] :as request}]
  [:html
   [:head
    [:title (t' :home/title )]
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min")
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min")]
   [:body
    [:div.container
     [:div.page-header [:h1 "List of subsites " [:small "click to enter"]]]
     [:ul
      [:li [:a {:href "/intro"} "Intro minisite"]]]
     [:div.panel.panel-primary
      [:div.panel-heading "Request"]
      [:div.panel-body  [:pre (ppstr request)]]]]
    (script "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min")]])

(defroutes home-routes (GET "/" [] (hiccup-page home-page)))