(ns shoplist.controls
  (:require [ajax.core :refer [GET]]
            [reagent.core :refer (atom)]
            [markdown.core :refer [md->html]]))

(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-5 body]])

(defn text-input [id label]
  (row label [:input.form-control {:field :text :id id}]))

(defn password-input [id label placeholder]
  (row label [:input.form-control {:id id :placeholder placeholder :type :password}]))

(defn selection-list [label id items]
  (row label
       [:div.btn-group {:field :multi-select :id id}
        (for [[k label] items]
          [:button.btn.btn-default {:key k} label])]))

(defn markdown [url]
  (let [mdresult (atom "loading...")]
    (GET
      (str js/context url)
      {:handler (fn [response] (reset! mdresult (md->html response)))})
    (fn [] [:p {:dangerouslySetInnerHTML {:__html @mdresult}}])))
