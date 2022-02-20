import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';
import { CounterComponent } from './counter/counter.component';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [AppComponent, CounterComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        StoreModule.forRoot(reducers, {
            metaReducers
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
