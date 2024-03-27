export const environment = {
  production: true,
  name: 'Production',
  isDebugMode: true,

  pai: { aplicacion: '', apiKey: '' },

  gvlogin: {
    enable: true,
    aplicacion: 'EXPROPIA',
    url: 'https://gvlogin.gva.es/gvlogin',
    tokenKey: 'gvlogin-token',
    tokenPeticionMarte: 'peticion-marte',
    whitelistedDomains: [
      'gvlogin.gva.es',
      'expropia.gva.es',
      'https://expropia.gva.es',
      'http://expropia.gva.es',
    ],
  },
  settings: {
    api: {
      version: '1.0.0',
      url: 'api',
    },
    name: 'expropia',
    host: 'https://expropia-frontend.gva.es/expropia-frontend/',
    hostDynamic: 'https://expropia.gva.es/expropia'
  },
  locale: {
    default: 'es',
    cultures: ['ca', 'es'],
  },
};
