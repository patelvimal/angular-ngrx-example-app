import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Post,
    SerializeOptions
} from '@nestjs/common';
import { get } from 'http';
import { delay, Observable, of } from 'rxjs';

import { AppService } from './app.service';
import { AuthModel } from './auth.model';
import { UserModel } from './user,model';

@Controller('auth')
export class AuthController {
    constructor() {}

    @Get()
    getUser() {
        return 'heelo';
    }

    @Post()
    login(@Body() auth: AuthModel): Observable<UserModel> {
        console.log(auth);
        if (auth.userName == 'admin' && auth.password == 'admin') {
            return of({
                email: 'admin@admin.com',
                name: 'admin'
            } as UserModel).pipe(delay(5000));
        }
        throw new InternalServerErrorException('UserName or Password is incorrect');
    }
}
