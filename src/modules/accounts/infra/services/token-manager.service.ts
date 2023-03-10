
import { injectable } from "tsyringe";
import { sign, verify } from "jsonwebtoken";
import { TokenManagerServiceInterface } from "../../domain/services/token-manager-service.interface";
import { VerifyTokenOutput } from "../../domain/services/verify-token.output";

@injectable()
export class TokenManagerService implements TokenManagerServiceInterface {
    private secret!: string;

    public constructor() {
        this.secret = process.env.JWT_SECRET ??'bull-secret';
    }

    public async create(id: string): Promise<string> {
        const config = {
            subject: id,
            issuer: 'bull-back',
            expiresIn: process.env.JWT_EXPIRES || '1h',
        };

        return sign({ id }, this.secret, config);
    }

    public async verify(jwt: string): Promise<VerifyTokenOutput> {
        return verify(jwt, this.secret) as VerifyTokenOutput;
    }
}
