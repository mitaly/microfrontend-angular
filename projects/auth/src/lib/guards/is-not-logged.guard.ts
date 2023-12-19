import { Injectable, inject } from '@angular/core';
import { CanMatch, CanMatchFn, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const isNotLogged : CanMatchFn = () => !inject(AuthService).isLogged();
