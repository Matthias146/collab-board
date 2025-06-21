import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { authRedirectGuard } from '../../core/guards/auth-redirect-guard';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: Login, canActivate: [authRedirectGuard] },
  { path: 'register', component: Register, canActivate: [authRedirectGuard] },
];
