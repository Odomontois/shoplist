(ns shoplist.home
  (:require [reagent.core :refer [atom]]
            [secretary.core :as secretary]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]
            [shoplist.data.drinks :refer [drinks]]
            [shoplist.controls :refer [text-input selection-list markdown]]
            [markdown.core :as md])
  (:require-macros [secretary.core :refer [defroute]]))

(def state (atom {:saved? false}))

(def form
  [:div
   [:div.page-header [:h1 "Reagent Form"]]
   (text-input :first-name "First name")
   (text-input :last-name "Last name")
   (text-input :nickname "Nickname")
   (selection-list "Favorite drinks" :favorite-drinks drinks)])

(defn save-doc [doc]
  (fn []
    (POST
      (str js/context "/save")
      {:params  {:doc @doc}
       :handler (fn [res]
                  (println res)
                  (set! (. js/document -title) (:title res))
                  (swap! state assoc :saved? true))})))

(defn about []
  [:div "this is the story of shoplist... i building man"])

(defn home []
  (let [doc (atom {})]
    (fn []
      [:div
       [bind-fields form doc
        (fn [_ _ _] (swap! state assoc :saved? false) nil)]
       (if (:saved? @state)
         [:p "Saved"]
         [:button {:type    "submit"
                   :class   "btn btn-default"
                   :onClick (save-doc doc)}
          "Submit!"])])))

(defn docs [] [markdown "/md/docs.md"])

(defn navbar []
  [:div.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} "shoplist"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (when (= home (:page @state)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/")} "Home"]]
      [:li {:class (when (= about (:page @state)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/about")} "About"]]
      [:li {:class (when (= docs (:page @state)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/docs")} "Docs"]]]]]])

(defn page [] [(:page @state)])

(secretary/set-config! :prefix "#")

(defroute "/" []
          (.log js/console "hi!")
          (swap! state assoc :page home))
(defroute "/about" [] (swap! state assoc :page about))
(defroute "/docs" [] (swap! state assoc :page docs))
