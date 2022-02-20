import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    declarations: [],
    imports: [CommonModule, InMemoryWebApiModule.forRoot(DataService)]
})
export class CoreModule {}
