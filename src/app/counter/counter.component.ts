import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customIncrement, decrement, increment, reset } from '../actions/counter.action';
import { CounterState } from '../reducers/counter.reducer';
import { getCounter, getCounterTitle } from '../selectors/counter.selector';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    value: number = 0;
    count$: Observable<number> = this.store.select(getCounter);
    counterTitle$: Observable<string> = this.store.select(getCounterTitle);

    ngOnInit(): void {}

    constructor(private store: Store<{ count: CounterState }>) {
        this.store.select('count').subscribe((x) => console.log(x));
    }

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
