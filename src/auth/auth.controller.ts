import { Get, Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDTO } from './dto/auth.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    getAuth() {
        return 'This is the auth route'
    }
    @Post('signup')
    signup(@Body() dto: authDTO) {
        console.log(dto);
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: authDTO) {
        console.log(dto);
        return this.authService.signin(dto);
    }
}
