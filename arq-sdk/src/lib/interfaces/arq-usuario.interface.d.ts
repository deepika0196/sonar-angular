/**
 * Usuario de la aplicación
 */
export interface ArqUsuario {
    nombre: string;
    apellidos: string;
    email: string;
    roles: {
        codigo: string;
        infoAmpliada: any;
    }[];
}
