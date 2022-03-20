import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@portal-ui/data-access/auth.service';
import { Auth } from '@portal-ui/data-models/auth.model';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import { login, loginFailure, loginSuccess } from './login.actions';

@Injectable()
export class LoginEffect {
    constructor(private action$: Actions, private authService: AuthService) {}

    login$ = createEffect(() =>
        this.action$.pipe(
            ofType(login),
            map((action) => action.payload),
            mergeMap((auth: Auth) => {
                console.log(auth);
                return this.authService.checkUserAuthentication(auth).pipe(
                    map((user) => loginSuccess({ user })),
                    catchError((error) => of(loginFailure({ error })))
                );
            })
        )
    );
}
