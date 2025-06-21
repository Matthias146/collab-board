import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES
      ),
  },
  {
    path: 'board/:id',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/board/board.routes').then((m) => m.BOARD_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'dashboard', // oder zu einer NotFound-Page
  },
];
