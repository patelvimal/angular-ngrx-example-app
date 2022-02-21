import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customIncrement, decrement, increment, reset } from '../actions/counter.action';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    value: number = 0;
    count$: Observable<number> = this.store.select('count');

    ngOnInit(): void {}

    constructor(private store: Store<{ count: number }>) {}

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }

    customCounter() {
        this.store.dispatch(customIncrement({ payload: +this.value }));
    }
}
