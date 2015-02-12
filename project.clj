(defproject shoplist "0.1.0-SNAPSHOT"
  :description "Some Training shit"
  :url "https://odomontois.org"
  :dependencies [[org.clojure/clojurescript "0.0-2665"]
                 [prone "0.8.0"]
                 [com.novemberain/monger "2.0.0"]
                 [log4j
                  "1.2.17"
                  :exclusions
                  [javax.mail/mail
                   javax.jms/jms
                   com.sun.jdmk/jmxtools
                   com.sun.jmx/jmxri]]
                 [selmer "0.7.7"]
                 [com.taoensso/tower "3.0.2"]
                 [markdown-clj "0.9.58" :exclusions [com.keminglabs/cljx]]
                 [im.chit/cronj "1.4.3"]
                 [com.taoensso/timbre "3.3.1"]
                 [noir-exception "0.2.3"]
                 [http-kit "2.1.19"]
                 [cljs-ajax "0.3.4"]
                 [lib-noir "0.9.5"]
                 [org.clojure/clojure "1.6.0"]
                 [environ "1.0.0"]
                 [ring-server "0.3.1"]
                 [reagent "0.4.3"]
                 [reagent-forms "0.3.9"]
                 [secretary "1.2.1"]
                 [commons-daemon/commons-daemon "1.0.15"]]
  :repl-options {:init-ns shoplist.repl}
  :jvm-opts ["-server"]
  :plugins [[lein-ring "0.9.0"]
            [lein-environ "1.0.0"]
            [lein-ancient "0.5.5"]
            [lein-cljsbuild "1.0.4"]]
  :ring {:handler      shoplist.handler/app
         :init         shoplist.handler/init
         :destroy      shoplist.handler/destroy
         :uberwar-name "shoplist.war"}
  :profiles
  {:uberjar    {:cljsbuild   {:jar    true
                              :builds {:intro      {:source-paths ["env/prod/cljs/intro"]
                                                    :compiler     {:optimizations :advanced
                                                                   :pretty-print  false}}
                                       :mycorrhiza {:source-paths ["env/prod/cljs/mycorrhiza"]
                                                    :compiler     {:optimizations :advanced
                                                                   :pretty-print  false}}
                                       :nono       {:source-paths ["env/prod/cljs/nono"]
                                                    :compiler     {:optimizations :advanced
                                                                   :pretty-print  false}}}}
                :hooks       [leiningen.cljsbuild]
                :omit-source true
                :env         {:production true}
                :aot         :all}
   :production {:ring {:open-browser? false
                       :stacktraces?  false
                       :auto-reload?  false}}
   :dev        {:cljsbuild    {:builds {:intro      {:source-paths ["env/dev/cljs/intro"]}
                                        :mycorrhiza {:source-paths ["env/dev/cljs/mycorrhiza"]}
                                        :nono       {:source-paths ["env/dev/cljs/nono"]}}}
                :dependencies [[ring-mock "0.1.5"]
                               [ring/ring-devel "1.3.2"]
                               [pjstadig/humane-test-output "0.6.0"]]
                :injections   [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]
                :env          {:dev true}}
   :cljsbuild  {:builds {:intro      {:source-paths ["src-cljs"]
                                      :compiler     {:output-dir    "resources/public/js/intro"
                                                     :externs       ["react/externs/react.js"]
                                                     :optimizations :none
                                                     :output-to     "resources/public/js/intro.js"
                                                     :source-map    "resources/public/js/intro.js.map"
                                                     :pretty-print  true}}
                         :mycorrhiza {:source-paths ["src-cljs"]
                                      :compiler     {:output-dir    "resources/public/js/mycorrhiza"
                                                     :externs       ["react/externs/react.js"]
                                                     :optimizations :none
                                                     :output-to     "resources/public/js/mycorrhiza.js"
                                                     :source-map    "resources/public/js/mycorrhiza.js.map"
                                                     :pretty-print  true}}
                         :nono       {:source-paths ["src-cljs"]
                                      :compiler     {:output-dir    "resources/public/js/nono"
                                                     :externs       ["react/externs/react.js"]
                                                     :optimizations :none
                                                     :output-to     "resources/public/js/nono.js"
                                                     :source-map    "resources/public/js/nono.js.map"
                                                     :pretty-print  true}}}}}

  :uberjar-name "shoplist.jar"
  :main shoplist.core
  :min-lein-version "2.0.0")
