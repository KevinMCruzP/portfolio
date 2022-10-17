const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt-BR'],
    localePath: path.resolve('./public/locales'),
    domains: [
      {
        domain: 'https://kevincruz.vercel.app/',
        defaultLocale: 'es',
      }
    ],
    localeDetection: false,
  }
}