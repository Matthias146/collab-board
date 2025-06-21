import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authRedirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  return true;
};
