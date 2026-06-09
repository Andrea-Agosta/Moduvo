import { createActionGroup, emptyProps, props } from '@ngrx/store';

export interface User {
  email: string;
  name: string;
}

export const AuthActions = createActionGroup({
  source: 'Auth API',
  events: {
    // initialize
    'Initialize Auth': emptyProps(),
    'Initialize Auth Success': props<{ user: User | null }>(),
    'Initialize Auth Failure': emptyProps(),

    // Login
    'Login': props<{ email: string; password: string }>(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: string }>(),

    // Signup
    'Signup': props<{ email: string; password: string; name: string }>(),
    'Signup Success': props<{ user: User }>(),
    'Signup Failure': props<{ error: string }>(),

    // Logout
    'Logout': emptyProps(),
  },
});