import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/login.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/login.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        HttpClientModule,
        EffectsModule.forFeature([LoginEffect]),
        StoreModule.forFeature(fromLogin.featureKey, fromLogin.reducer)
    ]
})
export class LoginModule {}
