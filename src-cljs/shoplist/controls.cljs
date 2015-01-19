(ns shoplist.controls)

(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-5 body]])

(defn text-input [id label]
  (row label [:input.form-control {:field :text :id id}]))

(defn selection-list [label id items]
  (row label
       [:div.btn-group {:field :multi-select :id id}
        (for [[k label] items]
          [:button.btn.btn-default {:key k} label])]))
