export class CIFValidator {
  private static readonly SIN_CIF: RegExp =
    /[ABCDEFGHJKLMNPQRSUVW]{1}[0-9]{7}([0-9]|[ABCDEFGHIJ]){1}/;
  private static readonly SIN_NIE: RegExp = /[X|Y|Z][0-9]{1,8}[A-Z]{1}/;
  private static readonly LETRAS: string = 'TRWAGMYFPDXBNJZSQVHLCKE';
  private static readonly SIN_NIF: RegExp =
    /[0-9]{0,8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}/;
  private static readonly REPLACE: RegExp = /[\r\n]/;
  public static readonly CERO = 0;
  public static readonly UNO = 1;
  public static readonly DOS = 2;
  public static readonly TRES = 3;
  public static readonly CUATRO = 4;
  public static readonly CINCO = 5;
  public static readonly SEIS = 6;
  public static readonly SIETE = 7;
  public static readonly OCHO = 8;
  public static readonly NUEVE = 9;
  public static readonly DIEZ = 10;
  public static readonly DOCE = 12;
  public static readonly DIECIOCHO = 18;
  public static readonly VEINTITRES = 23;
  public static readonly TREINTA = 30;
  public static readonly CINCUENTAYNUEVE = 59;
  public static readonly SESENTA = 60;
  public static readonly CIEN = 100;
  private static readonly v2: string[] = [
    'J',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
  ];

  public static esNifNieCifValido(valor: string): boolean {
    return (
      CIFValidator.esNif(valor) ||
      CIFValidator.esNie(valor) ||
      CIFValidator.esCif(valor)
    );
  }

  private static esNif(valor: string): boolean {
    let resultado = true;

    try {
      if (!valor) {
        resultado = false;
      }

      if (resultado && !valor.match(CIFValidator.SIN_NIF)) {
        resultado = false;
      }

      if (resultado && (valor.length < 9 || valor.length > 10)) {
        resultado = false;
      }

      if (resultado) {
        const letraNif: string = valor.slice(-1).toUpperCase();

        const letra: string = CIFValidator.getLetraNIF(valor);

        resultado = letraNif === letra;
      }
    } catch (exception: any) {
      console.error(exception.replace(CIFValidator.REPLACE, ''), exception);
      resultado = false;
    }

    return resultado;
  }

  private static esNie(nie: string): boolean {
    let resultado = true;

    try {
      if (!nie || !nie.match(CIFValidator.SIN_NIE)) {
        resultado = false;
      }

      if (resultado && !nie.match(/^[X|Y|Z]{1}[0-9]{1,8}[A-Z]{1}$/)) {
        resultado = false;
      }

      if (resultado) {
        const numero: string = nie.replace(/[a-zA-Z]/g, '');
        let inicio = '';
        const comienzaNie: string = nie.charAt(0);

        if (comienzaNie === 'Y') {
          inicio = '1';
        } else if (comienzaNie === 'Z') {
          inicio = '2';
        }

        const letra: string = nie.substring(1).replace(/[^a-zA-Z]/g, '');

        if (letra !== CIFValidator.getLetraNIF(inicio + numero)) {
          resultado = false;
        }
      }
    } catch (exc) {
      console.debug('Error validando el parametro del NIE ', exc);
      resultado = false;
    }

    return resultado;
  }

  private static esCif(valor: string): boolean {
    let resultado = true;

    try {
      if (!valor || !valor.match(CIFValidator.SIN_CIF)) {
        resultado = false;
      }

      if (resultado) {
        const codigoControl: string = valor.slice(-1);
        const v1: number[] = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

        let suma = 0;

        for (let i = 2; i <= 6; i += 2) {
          suma += v1[parseInt(valor.substr(i - 1, 1))];
          suma += parseInt(valor.substr(i, 1));
        }

        suma += v1[parseInt(valor.substr(6, 1))];
        suma = 10 - (suma % 10);

        if (suma === 10) {
          suma = 0;
        }

        const letraControl: string = CIFValidator.v2[suma];
        resultado =
          codigoControl === suma.toString() ||
          codigoControl.toUpperCase() === letraControl.toUpperCase();
      }
    } catch (e) {
      console.debug('Error validando el parametro del CIF ', e);
      resultado = false;
    }

    return resultado;
  }

  private static getLetraNIF(numero: string): string {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letras.charAt(parseInt(numero, 10) % 23);
  }
}
