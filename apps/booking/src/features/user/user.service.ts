import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  me$: Subject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {
    this.setUser();
  }

  setUser(): void {
    const token = localStorage.getItem('token');
    if(token) {
      const user: User = jwt_decode(token);
      this.me$.next(user);
    }
  }

  removeUser(): void {
    this.me$.next(null);
  }

  isLoggedIn$(): Observable<boolean> {
    return this.me$.pipe(map(user => !!user));
  }
}
