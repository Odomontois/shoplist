(ns mycorrhiza.routes
  (:require [compojure.core :refer :all]
            [shoplist.layout :refer [hiccup-page]]
            [mycorrhiza.view :refer [home]]))

(defroutes my-routes
  (GET "/mycorrhiza" [] (hiccup-page home)))
