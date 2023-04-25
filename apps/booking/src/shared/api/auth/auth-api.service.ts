import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { JWTResponse, LoginPayload, RegisterPayload } from './models';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private readonly http: HttpClient) {}

  login(payload: LoginPayload) {
    return this.http.post<JWTResponse>(`${environment.apiUrl}/auth/login`, payload)
  }

  register(payload: RegisterPayload) {
    return this.http.post<JWTResponse>(`${environment.apiUrl}/auth/registration`, payload)
  }

  update(payload: RegisterPayload) {
    return this.http.patch<JWTResponse>(`${environment.apiUrl}/auth/update`, payload)
  }
}
