import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '@portal-ui/data-models/user.model';
import { Observable } from 'rxjs';
import { loadingStart } from '../../shared/components/loader/store/loader.action';
import { login } from './store/login.actions';
import { getCurrentUser } from './store/login.selector';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    user$: Observable<User | null> = this.store.select(getCurrentUser);

    constructor(private readonly fb: FormBuilder, private readonly store: Store) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(): void {
        console.log(this.loginForm.value);
        this.store.dispatch(
            login({
                payload: this.loginForm.value
            })
        );
        // this.store.dispatch(loadingStart());
    }
}
