import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './login.reducer';

const getAuthState = createFeatureSelector<UserState>('login');

export const getCurrentUser = createSelector(
    getAuthState,
    (state: UserState) => state.user
);
