const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'pt-BR'],
    domains: [
      {
        domain: 'https://kevincruz.vercel.app/',
        defaultLocale: 'en',
      }
    ],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false }
}
