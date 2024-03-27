export interface TokenRequest{
    application:String,
    userInfo: TokenData
}

export interface TokenData{
    nif:String,
    name:String,
    email:String,
    rol:String,
}

export interface TokenSimulated{
    token:String
  }