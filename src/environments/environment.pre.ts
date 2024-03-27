// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Preproduccion',
  production: false,
  isDebugMode: true,

  pai: { aplicacion: '', apiKey: '' },

  gvlogin: {
    enable: true,
    aplicacion: 'EXPROPIA',
    url: 'https://gvlogin-pre.gva.es/gvlogin',
    tokenKey: 'gvlogin-token',
    tokenPeticionMarte: 'peticion-marte',
    whitelistedDomains: [
      'gvlogin-pre.gva.es',
      'expropia-pre.gva.es',
      'https://expropia-pre.gva.es',
      'http://expropia-pre.gva.es',
    ],
  },
  settings: {
    api: {
      version: '01.00.00',
      url: 'api',
    },
    name: 'expropia-backend',
    host: 'https://expropia-frontend-pre.gva.es/expropia-frontend/',
    hostDynamic: 'https://expropia-pre.gva.es/expropia',
  },
  locale: {
    default: 'es',
    cultures: ['ca', 'es'],
  },
};
