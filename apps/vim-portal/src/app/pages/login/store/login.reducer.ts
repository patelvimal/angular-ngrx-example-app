import { act } from '@ngrx/effects';
import { Action, ActionReducerMap, createReducer, on, State } from '@ngrx/store';
import { User } from '@portal-ui/data-models/user.model';
import { loginSuccess } from './login.actions';

export const featureKey = 'login';

export interface UserState {
    user: User | null;
}
export const initialState: UserState = {
    user: null
};

const loginReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return { ...state, user: action.user };
    })
);

export function reducer(state: UserState, action: Action) {
    return loginReducer(state, action);
}
