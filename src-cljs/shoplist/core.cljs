(ns shoplist.core
  (:require [reagent.core :refer [render-component]]
            [shoplist.home :refer [home page state navbar docs]]))

(defn init! []
  (swap! state assoc :page home)
  (render-component [navbar] (.getElementById js/document "navbar"))
  (render-component [page] (.getElementById js/document "app"))
  (render-component (docs)  (.getElementById js.document "docs")))


