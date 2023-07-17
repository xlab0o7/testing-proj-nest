import { PrismaService } from 'src/prisma/prisma.service';
import { authDTO } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
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
