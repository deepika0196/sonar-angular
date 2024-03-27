// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Desarrollo',
  production: false,
  isDebugMode: true,

  pai: { aplicacion: '', apiKey: '' },

  gvlogin: {
    enable: true,
    aplicacion: 'EXPROPIA',
    url: 'https://gvlogin-dsa.gva.es/gvlogin',
    tokenKey: 'gvlogin-token',
    tokenPeticionMarte: 'peticion-marte',
    whitelistedDomains: [
      'gvlogin-dsa.gva.es',
      'expropia-dsa.gva.es',
      'https://expropia-dsa.gva.es',
      'http://expropia-dsa.gva.es',
    ],
  },
  settings: {
    api: {
      version: '01.00.00',
      url: 'api',
    },
    name: 'expropia-backend',
    host: 'https://expropia-frontend-dsa.gva.es/expropia-frontend/',
    hostDynamic: 'https://expropia-dsa.gva.es/expropia',
  },
  locale: {
    default: 'es',
    cultures: ['ca', 'es'],
  },
};
