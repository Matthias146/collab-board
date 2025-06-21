import { computed, signal } from '@angular/core';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from 'firebase/auth';

const authService = inject(AuthService);
export const userSignal = toSignal<User | null>(inject(AuthService).user$, {
  initialValue: null,
});

export const isLoggedInSignal = computed(() => !!userSignal());
