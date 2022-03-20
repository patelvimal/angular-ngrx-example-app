import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './store/login.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
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
    }
}
