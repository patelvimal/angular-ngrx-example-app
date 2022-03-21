import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService } from '@portal-ui/data-access/auth.service';
import { Auth } from '@portal-ui/data-models/auth.model';
import { catchError, EMPTY, finalize, map, mergeMap, of } from 'rxjs';
import {
    loadingStart,
    loadingStop
} from '../../../shared/components/loader/store/loader.action';
import { login, loginFailure, loginSuccess } from './login.actions';

@Injectable()
export class LoginEffect {
    constructor(
        private readonly action$: Actions,
        private readonly authService: AuthService,
        private readonly store: Store
    ) {}

    login$ = createEffect(() =>
        this.action$.pipe(
            ofType(login),
            map((action) => action.payload),
            mergeMap((auth: Auth) => {
                this.store.dispatch(loadingStart());
                return this.authService.checkUserAuthentication(auth).pipe(
                    map((user) => loginSuccess({ user })),
                    catchError((error) => of(loginFailure({ error }))),
                    finalize(() => this.store.dispatch(loadingStop()))
                );
            })
        )
    );
}
