// tag::securityAnexoGvloginTokenData[]
export interface ArqGvloginTokenData {
  /**
   * Issuer. Identifica al principal que ha emitido el JWT.
   */
  iss: string;

  /**
   * Subject. Identifica al principal que recibe el JWT.
   */
  sub: string;

  /**
   * Audience. Identifica los contenedores para los que el JWT está destinado.
   */
  aud: string;

  /**
   * Expiration time. Indica el momento de expiración tras el cual el JWT deja de ser válido.
   */
  exp: number;

  /**
   * Issued at. Indica el momento en el que el JWT fue emitido.
   */
  iat: number;

  /**
   * Authentication Context Class Reference. Valor que identifica la clase del contexto de autenticación que realizó la autenticación.
   */
  acr: string;

  /**
   * Name. Nombre completo del usuario.
   */
  name: string;

  /**
   * Email. Dirección de e-mail del usuario.
   */
  email: string;

  /**
   * Given name. Nombre del usuario.
   */
  given_name: string;

  /**
   * Family name. Apellidos del usuario.
   */
  family_name: string;

  /**
   * Public key. Información sobre la clave pública.
   */
  p_key: {
    e: string;
    n: string;
    kty: string;
    kid: string;
  };

  /**
   * Información ampliada.
   */
  info_ampliada?: any;

  /**
   * Parámetros adicionales
   */
  parametros_adicionales?: any;

  /**
   * Roles. Listado de roles del usuario.
   */
  rol: {
    /**
     * Código. Identificador del rol.
     */
    codigo: string;

    /**
     * Información ampliada.
     */
    infoAmpliada: any;
  }[];
}
// end::securityAnexoGvloginTokenData[]
