import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
