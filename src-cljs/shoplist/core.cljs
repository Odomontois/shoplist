(ns shoplist.core
  (:require [reagent.core :refer [render-component]]
            [shoplist.home :refer [home page state navbar]]))

(defn init! []
  (swap! state assoc :page home)
  (render-component [navbar] (.getElementById js/document "navbar"))
  (render-component [page]   (.getElementById js/document "app")))


