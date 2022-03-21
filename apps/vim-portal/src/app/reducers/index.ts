import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loaderReducer } from '../shared/components/loader/store/loader.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
    loader: loaderReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
