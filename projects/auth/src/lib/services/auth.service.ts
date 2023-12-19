import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { User } from 'models';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user  = new BehaviorSubject<User | undefined>(undefined);
  constructor() { }

  public login(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    this._user.next(user);
  }

  public logout() {
    localStorage.removeItem("user");
    this._user.next(undefined);
  }

  public isLogged(){
    return this._user != undefined && this._user != null;
  }

  public get user() : User | undefined{
    return this._user.value;
  }
}
