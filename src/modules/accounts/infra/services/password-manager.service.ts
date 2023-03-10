
import { compare, hash } from "bcrypt";
import { injectable } from "tsyringe";
import { PasswordManagerServiceInterface } from "../../domain/services/password-manager-service.interface";

@injectable()
export class PasswordManagerService implements PasswordManagerServiceInterface {
    public create(password: string): Promise<string> {
        return hash(password, 8);
    }

    public  verify(hash1: string, hash2: string): Promise<boolean> {
        return compare(hash1, hash2);
    }
}
