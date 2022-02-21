import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

const getCounterState = createFeatureSelector<CounterState>('count');

export const getCounter = createSelector(getCounterState, (state) => state.counter);
export const getCounterTitle = createSelector(
    getCounterState,
    (state) => state.counterTitle
);
