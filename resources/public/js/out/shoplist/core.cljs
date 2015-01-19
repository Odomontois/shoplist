(ns shoplist.core
  (:require [reagent.core :as reagent]
            [shoplist.home :refer [state form home about navbar page]]))

(defn init! []
  (swap! state assoc :page shoplist.home.home)
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app")))


