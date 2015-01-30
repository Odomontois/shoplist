(ns ^{:author "Odomontois"} shoplist.routes.home
  (:require [compojure.core :refer :all]
            [shoplist.layout :refer [hiccup-page]]
            [shoplist.util.hiccup :refer [css script]]))

(defn home-page []
  [:html
   [:head
    [:title "Odopage"]
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min")
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min")]
   [:body
    [:div.container
     [:div.page-header [:h1 "List of subsites " [:small "click to enter"]]]
     [:ul
      [:li [:a {:href "/intro"} "Intro minisite"]]]]
    (script "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min")]])

(defroutes home-routes
           (GET "/" [] (hiccup-page (home-page))))