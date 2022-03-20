import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Post
} from '@nestjs/common';
import { get } from 'http';
import { Observable } from 'rxjs';

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
    login(@Body() auth: AuthModel): UserModel {
        console.log(auth);
        if (auth.userName == 'admin' && auth.password == 'admin') {
            return {
                email: 'admin@admin.com',
                name: 'admin'
            } as UserModel;
        }
        throw new InternalServerErrorException('UserName or Password is incorrect');
    }
}
