export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  first_name: string;
  second_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface JWTResponse {
  token: string
}
