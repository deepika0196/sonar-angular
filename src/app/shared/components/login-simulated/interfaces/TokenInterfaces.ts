export interface TokenRequest {
  application: string;
  userInfo: TokenData;
}

export interface TokenData {
  nif: string;
  name: string;
  email: string;
  rol: string;
}

export interface TokenSimulated {
  token: string;
}
