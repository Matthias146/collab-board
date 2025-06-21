import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const user = inject(userSignal);
  // const router = inject(Router);

  // if (!user()) {
  //   router.navigate(['/auth/login']);
  //   return false;
  // }
  return true;
};
