(ns ^{:author "Odomontois"} shoplist.routes.home
  (:require [compojure.core :refer :all]
            [shoplist.layout :refer [hiccup-page ppstr]]
            [shoplist.util.hiccup :refer [css js]]))

(defn home-page [{:keys [t'] :as request}]
  [:html
   [:head
    [:title (t' :home/title)]
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min")
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min")]
   [:body
    [:div.container
     [:div.page-header [:h1 (t' :home/header/main) " "[:small (t' :home/header/tip)]]]
     [:ul
      [:li [:a {:href "/intro"} (t' :home/sites/intro)]]
      [:li [:a {:href "/mycorrhiza"} (t' :home/sites/mycorrhiza)]]]
     [:div.panel.panel-primary
      [:div.panel-heading (t' :home/request)]
      [:div.panel-body [:pre (ppstr request)]]]]
    (js "ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min")
    (js "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min")]])

(defroutes home-routes (GET "/" [] (hiccup-page home-page)))