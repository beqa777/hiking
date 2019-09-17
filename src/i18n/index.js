import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import eng from '../locales/eng.js';
import geo from '../locales/geo.js';


const options = {
    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    //debug: true,

    // lng: 'en',

    resources: {
        geo: {
            common: geo.geo,
        },
        eng: {
            common: eng.eng,
        },
    },

    fallbackLng: 'eng',

    ns: ['common'],

    defaultNS: 'common',
    returnObjects: true,
    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    },
};

i18n
    .use(I18nextBrowserLanguageDetector)
    .init(options);

export default i18n;