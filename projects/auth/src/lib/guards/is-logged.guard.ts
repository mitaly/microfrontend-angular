
import { CanMatchFn, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const isLogged : CanMatchFn = () =>  inject(AuthService).isLogged();
