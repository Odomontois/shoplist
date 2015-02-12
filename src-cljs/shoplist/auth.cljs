(ns shoplist.auth
  (:require [shoplist.controls :refer [text-input password-input]]
            [reagent-forms.core :refer [bind-fields]]
            [reagent.core :refer [atom]]
            [ajax.core :refer [GET POST]]))

(def user (atom nil))

(def login-form
  [:div
   (text-input :username "email")
   (password-input :password "Password" "enter your password")])

(defn pass-login [auth]
  (fn []
    (POST
      "/login"
      {:params  @auth
       :format :edn
       :handler (fn [user-id] (reset! user user-id))})))

(defn login []
  (let [auth-vals (atom {})]
    (fn []
      [:div
       [bind-fields login-form auth-vals]
       [:button.btn.btn-default
        {:type    :submit
         :onClick (pass-login auth-vals)}
        "Login"]])))
(def login-register
  [:div
   [login]
   [:h1 [:a {:href "/register"} "Register"]]])

(defn get-user []
  (GET "/userId" {:handler (fn [user-id] (reset! user user-id))}))
