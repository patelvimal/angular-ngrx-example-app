import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLoaderStatus } from './store/loader.selector';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    loader$ = this.store.select(getLoaderStatus);
    constructor(private readonly store: Store) {}

    ngOnInit(): void {}
}
