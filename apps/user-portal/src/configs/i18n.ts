/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import _ from "lodash";
import { initReactI18next } from "react-i18next";
import * as locales from "../locales";

/**
 * Supported language list.
 */
const SupportedLanguages = {
    en: {
        flag: "us",
        name: "English (US)"
    },
    pt: {
        flag: "pt",
        name: "Portuguese"
    }
};

/*
 * i18n initialization options
 */
const initOptions = {
    contextSeparator: "_",
    debug: false,
    defaultNS: "common",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false // not needed for react
    },
    keySeparator: ".",
    // ns: ["common, views"],
    nsSeparator: ":",
    pluralSeparator: "_",
    // resources: locales
};

/*
 * initialize i18n
 */
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init(initOptions);

/**
 * Dynamically loads locale extensions and initializes
 * the resources.
 */
const resolveLocaleResources = () => {
        import("../extensions/locales")
            .then((extensions) => {
                addResourceBundle(extensions);
            })
            .catch((error) => {
                addResourceBundle(null);
            });
};

/**
 * Adds a resource bundle to the `i18n` instance.
 *
 * @param extensions - Locale extensions.
 */
const addResourceBundle = (extensions: any) => {
    let resources = locales;

    if (extensions) {
        resources = _.defaultsDeep(extensions, locales);
    }

    for (const [ lnKey, lnValue ] of Object.entries(resources)) {
        for (const [ nsKey, nsValue ] of Object.entries(lnValue)) {
            i18n.addResourceBundle(lnKey, nsKey, nsValue);
        }
    }
};

resolveLocaleResources();

/*
 * If detected language is not a supported language fallback to default
 */
const defaultLanguageFallback = () => {
    let unSupportedLanguage = true;

    Object.keys(SupportedLanguages).forEach((elem) => {
        if (elem === i18n.language) {
            unSupportedLanguage = false;
            return;
        }
    });

    if (unSupportedLanguage) {
        i18n.changeLanguage("en");
    }
};

defaultLanguageFallback();

export { i18n, SupportedLanguages };
