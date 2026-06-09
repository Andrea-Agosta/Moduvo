import { createReducer, on } from '@ngrx/store';
import { AuthActions, User } from './auth.actions';

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
};

export const authReducer = createReducer(
  initialState,

  // Loader if start the login/signup
  on(AuthActions.initializeAuth, AuthActions.login, AuthActions.signup, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  // Success login or signup
  on(
    AuthActions.initializeAuthSuccess,
    AuthActions.loginSuccess,
    AuthActions.signupSuccess,
    (state, { user }) => ({
      ...state,
      user,
      isLoading: false,
    })
  ),

  // failure
  on(AuthActions.loginFailure, AuthActions.signupFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // Reset store after logout
  on(AuthActions.logout, () => ({
    ...initialState,
    isLoading: false,
  }))
);
