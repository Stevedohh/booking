export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

interface Role {
  id: number,
  value: ROLES
}

export interface RawUser {
  id: string,
  first_name: string,
  second_name: string,
  email: string,
  phone: string,
  role: Role,
}

export interface User {
  id: string,
  firstName: string,
  secondName: string,
  email: string,
  phone: string,
  role: Role,
}
