import { environment as defaultEnvironment } from './environment';

export const environmentLoader = new Promise<any>((resolve, reject) => {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.open('GET', './conf/env.json', true);

  xmlhttp.onload = () => {
    if (xmlhttp.status === 200) {
      console.log(xmlhttp.responseText);
      const customEnvironment = JSON.parse(xmlhttp.responseText);
      resolve(customEnvironment);
    } else {
      console.warn(
        'Fichero de configuración externo no encontrado. Se utilizará la configuración por defecto.'
      );
      resolve(defaultEnvironment);
    }
  };
  xmlhttp.onerror = function () {
    reject();
  };

  xmlhttp.send();
});
