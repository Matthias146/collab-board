// src/app/core/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (user) => this.userSubject.next(user));
  }

  // Observable für Signals etc.
  user$ = this.userSubject.asObservable();

  // 🔐 E-Mail/Passwort
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  // 🔑 Google OAuth Login
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  // Optional: weitere Provider
  // loginWithGithub() { ... }
}
