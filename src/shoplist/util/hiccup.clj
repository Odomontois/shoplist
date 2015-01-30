(ns ^{:author "Odomontois"} shoplist.util.hiccup)

(defn css [url] [:link {:href (str "https://" url ".css") :rel "stylesheet"}])
(defn script [url] [:script {:src (str "https://" url ".js")}])