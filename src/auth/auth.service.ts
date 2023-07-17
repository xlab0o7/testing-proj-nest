import { ForbiddenException, Get, Injectable, Post } from '@nestjs/common';

import * as argon from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service';
import { authDTO } from './dto/auth.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async signup(dto: authDTO) {
        try {
            // generate the password hash
            const hash = await argon.hash(dto.password);
            //save the new user in the db
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                }
            });
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException(
                        'Credentials taken'
                    );
                }
            } throw error;
        }
    }
    async signin(dto: authDTO) {
        // finding users by email {unique}
        const user = await this.prisma.user.findFirst({
            where: { email: dto.email, }
        });
        // if there is no user
        if (!user) throw new ForbiddenException('Credentials are incorrect');
        // compare password
        const pwMatch = await argon.verify(user.hash, dto.password);

        // if password incorrect
        if (!pwMatch)
            throw new ForbiddenException('Credential are incorrect');

        delete user.hash;
        return user;
    }
};



