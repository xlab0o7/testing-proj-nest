import { AuthService } from './auth.service';
import { authDTO } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
    signup(dto: authDTO): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    }, unknown> & {}>;
    signin(dto: authDTO): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    }, unknown> & {}>;
}
