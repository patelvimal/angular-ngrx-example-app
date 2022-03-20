import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@portal-ui/data-models/auth.model';
import { User } from '@portal-ui/data-models/user.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    checkUserAuthentication(auth: Auth): Observable<User> {
        return this.http.post<User>('http://localhost:3333/api/auth', auth);
    }
}
