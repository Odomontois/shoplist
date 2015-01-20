(ns shoplist.dailycred
  (use [clojure.java.io :only [reader]])
  (require [cheshire.core :as json]))

(def client-id "a148699f-bfda-49cb-b665-81c475b7c616")

(def base-url "https://www.dailycred.com/user/api")

(defn sign-in [login pass] 
  (let [response (slurp (format "%s/signin.json?login=%s&pass=%s&client_id=%s"
                                  base-url login pass client-id))]
    (json/parse-string response true)))

(defn sign-up [email login pass] 
  (let [response (slurp (format "%s/signup.json?email=%s&username=%s&pass=%s&client_id=%s"
                                  base-url email login pass client-id))]
      (json/parse-string response true)))
