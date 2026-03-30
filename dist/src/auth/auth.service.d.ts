import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            plan: string;
            createdAt: Date;
        };
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            plan: string;
            stripeCustomerId: string | null;
            stripeSubscriptionId: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
    private signToken;
}
