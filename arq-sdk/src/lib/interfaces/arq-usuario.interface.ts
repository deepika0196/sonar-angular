/**
 * Usuario de la aplicación
 */
// tag::securityUserModel[]
export interface ArqUsuario {
  nombre: string;
  apellidos: string;
  email: string;
  roles: {
    codigo: string;
    infoAmpliada: any;
  }[];
}
// end::securityUserModel[]
