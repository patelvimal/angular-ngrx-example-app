import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {
    constructor() {}
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        return {
            products: [
                {
                    id: 1,
                    name: 'Apple Mobile',
                    description: 'Apple Mobile Description',
                    price: 5
                },
                {
                    id: 2,
                    name: 'One Plus 9',
                    description: 'One Plus 9',
                    price: 5
                }
            ]
        };
    }
}
