(ns shoplist.home
  (:require [reagent.core :refer [atom]]
            [secretary.core :as secretary]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [GET POST]]
            [shoplist.data.drinks :refer [drinks]]
            [shoplist.controls :refer [text-input selection-list markdown password-input]]
            [markdown.core :as md]
            [shoplist.auth :refer [user login-register get-user]])
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
      (str js/context "/intro/save")
      {:params  {:doc @doc}
       :handler (fn [res]
                  (set! (. js/document -title) (:title res))
                  (swap! state assoc :saved? true))})))

(defn about []
  [:div "this is the story of shoplist... i building man"])

(defn get-doc [doc] (GET "/intro/doc" {:handler (fn [data] (reset! doc (:doc data)))}))

(defn form-input []
  (let [doc (atom {})]
    (get-doc doc)
    (fn []
      [:div
       [bind-fields form doc
        (fn [_ _ _] (swap! state assoc :saved? false) nil)]
       (if (:saved? @state)
         [:p "Saved"]
         [:button.btn.btn-default
          {:type    :submit
           :onClick (save-doc doc)}
          "Submit!"])])))

(defn home []
  (get-user)
  [(fn [] (if @user (form-input) login-register))])

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
