(ns mycorrhiza.view
  (:require [shoplist.util.hiccup :refer [css js js-local bootswatch]]
            [environ.core :refer [env]]))

(defn home [{:keys [t']}]
  [:html
   [:head
    [:title (t' :my/title)]
    (css "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min")
    (bootswatch :slate)]
   (vec (concat
     [:body
      [:h1 (t' :my/greeting)]
      (js "ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min")
      (js "maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min")]
     (if (env :dev)
       [(js "cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react")
        (js-local :mycorrhiza :goog :base)
        (js-local :mycorrhiza)
        [:script "goog.require('mycorrhiza.app');"]
        [:script ]]
       [(js "cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.min")
        (js-local :mycorrhiza)])))])


