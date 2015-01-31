(ns ^{:author "Odomontois"} shoplist.i18n
  (:require [shoplist.i18n.home :as home]
            [shoplist.i18n.mycorrhiza :as mycorrhiza]))

(def cfg
  {:fallback-locale :en
   :dictionary
                    {:en {:home home/en
                          :my   mycorrhiza/en}
                     :ru {:home home/ru
                          :my   mycorrhiza/ru}}})

