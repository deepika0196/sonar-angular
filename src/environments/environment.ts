// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Development',
  production: false,
  isDebugMode: true,

  pai: { aplicacion: '', apiKey: '' },

  gvlogin: {
    enable: false,
    enableLoginSimulated: false, //Only active on local environment, change this on DES, PRE and PRO enviroments, on back this won't be avaliable. If you have access to gvLogin service, you can use gvlogin-dsa
    aplicacion: 'PROTOTIPO',
    // url: 'https://gvlogin-dsa.gva.es/gvlogin',
    url: 'http://localhost:8080/prototipo-frontend/loginSimulated', // url to gvLoginLoginSimulated, you can
    tokenKey: 'gvlogin-token',
    tokenPeticionMarte: 'peticion-marte',
    whitelistedDomains: [
      'gvlogin-dsa.gva.es',
      'expropia-dsa.gva.es',
      'localhost.gva.es',
      'localhost.gva.es:8081',
      'http://localhost:8080',
    ],
  },
  settings: {
    api: {
      version: '01.00.00',
      url: 'api',
    },
    name: 'prototipo-backend',
    host: 'localhost.gva.es',
    hostDynamic: 'http://localhost:8081/ecmca-backend',
  },
  locale: {
    default: 'ca',
    cultures: ['ca', 'es', 'en'],
  },
};
