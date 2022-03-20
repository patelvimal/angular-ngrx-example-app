import { createAction, props } from '@ngrx/store';
import { Auth } from '@portal-ui/data-models/auth.model';
import { User } from '@portal-ui/data-models/user.model';

export const login = createAction('[Login Page] Login', props<{ payload: Auth }>());
export const loginSuccess = createAction(
    '[Auth API] Login Success',
    props<{ user: User }>()
);
export const loginFailure = createAction(
    '[Auth API] Login Failure',
    props<{ error: any }>()
);
