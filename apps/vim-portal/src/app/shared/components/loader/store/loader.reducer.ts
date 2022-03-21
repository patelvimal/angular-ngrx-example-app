import { Action, createReducer, on } from '@ngrx/store';
import { loadingStart, loadingStop } from './loader.action';

export const featureKey = 'loader';

export interface loaderState {
    status: boolean;
}

export const initialState: loaderState = {
    status: false
};

const _loaderReducer = createReducer(
    initialState,
    on(loadingStart, (state, action) => {
        return { ...state, status: true };
    }),
    on(loadingStop, (state, action) => {
        return { ...state, status: false };
    })
);

export function loaderReducer(state: loaderState, action: Action) {
    return _loaderReducer(state, action);
}
