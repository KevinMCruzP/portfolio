const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt-BR'],
    domains: [
      {
        domain: 'https://kevincruz.vercel.app/',
        defaultLocale: 'es',
      }
    ],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false }
}