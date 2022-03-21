import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loaderState } from './loader.reducer';

const getLoaderState = createFeatureSelector<loaderState>('loader');

export const getLoaderStatus = createSelector(getLoaderState, (state) => state.status);
