import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions, User } from './auth.actions';
import { map, switchMap, tap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  // TODO: check all this code when the backend implementation will be ready

  // Check localStorage on application startup
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initializeAuth),
      switchMap(() => {
        const storedUser = localStorage.getItem('user');
        const user: User | null = storedUser ? JSON.parse(storedUser) : null;
        return of(AuthActions.initializeAuthSuccess({ user }));
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      delay(1000), 
      map((action) => {
        const user: User = {
          email: action.email, 
          name: action.email.split('@')[0] 
        };
        // Save in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        return AuthActions.loginSuccess({ user });
      })
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      delay(1000),
      map((action) => {
        const user: User = {
          email: action.email, 
          name: action.name 
        };
        localStorage.setItem('user', JSON.stringify(user));
        return AuthActions.signupSuccess({ user });
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => localStorage.removeItem('user'))
      ),
    { dispatch: false }
  );
}
