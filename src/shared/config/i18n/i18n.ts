import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    // use это подключение плагинов
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        // fallbackLng - язык по умолчанию
        fallbackLng: 'ru',
        // благодаря настройке в вебпаке (webpack.DefinePlugin) есть возможность обращаться к глобальной переменной
        // но чтобы все работало, нужно добавить в глобальный файл с декларациями константу __IS_DEV__
        // затем нужно импортировать конфиг в index.tsx, чтобы языки начали работать
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });


export default i18n;