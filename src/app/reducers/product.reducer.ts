import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.action';

export const initialState = [];

const _productReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => initialState)
);

export function productReducer(state: any, action: any) {
    return _productReducer(state, action);
}
