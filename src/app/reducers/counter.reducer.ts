import { state } from '@angular/animations';
import { createReducer, on, props } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from '../actions/counter.action';

export interface CounterState {
    counter: number;
    counterTitle: string;
}

export const initialState: CounterState = {
    counter: 10,
    counterTitle: 'hello'
};

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(reset, (state) => ({ ...initialState })),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.payload
        };
    })
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}
