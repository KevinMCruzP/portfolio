const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt-BR'],
  },
  fallbackLng: {
    default: ['es'],
  },
  localePath: path.resolve('./public/locales'),
};