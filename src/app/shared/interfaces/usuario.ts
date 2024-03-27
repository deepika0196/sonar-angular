/**
 * Usuario de la aplicación
 */
// tag::securityUserModel[]
export interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  roles: {
    codigo: string;
    infoAmpliada: any;
  }[];
}
// end::securityUserModel[]
