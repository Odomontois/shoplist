(ns ^{:author "Odomontois"} shoplist.util.hiccup)

(defn css [url] [:link {:href (str "https://" url ".css") :rel "stylesheet"}])
(defn js [url] [:script {:src (str "https://" url ".js")}])
(defn js-local [& path] [:script {:src (str "/js/" (apply str (interpose "/"  (map name path))) ".js")}])
(defn bootswatch [theme] (css (str "maxcdn.bootstrapcdn.com/bootswatch/3.3.2/" (name theme) "/bootstrap.min")))
