import { createReducer, on, props } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from '../actions/counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0),
    on(customIncrement, (state, action) => state + action.payload)
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}
