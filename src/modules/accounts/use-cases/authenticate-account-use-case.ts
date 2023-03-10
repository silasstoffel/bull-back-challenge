import { injectable, inject } from "tsyringe";

import { AccountRepositoryInterface } from "../domain/account-repository.interface";
import { InvalidCredentialsException } from "../domain/exceptions/invalid-credentials.exception";
import { AuthenticateNotifierServiceInterface } from "../domain/services/authenticate-notifier-service.interface";
import { PasswordManagerServiceInterface } from "../domain/services/password-manager-service.interface";
import { TokenManagerServiceInterface } from "../domain/services/token-manager-service.interface";
import { AuthenticateInput } from "./authenticate.input";
import { AuthenticateOutput } from "./authenticate.output";

@injectable()
export class AuthenticateAccountUseCase {

    public constructor(
        @inject('AccountRepository')
        private readonly accountRepository: AccountRepositoryInterface,
        @inject('PasswordManagerService')
        private readonly passwordManagerService: PasswordManagerServiceInterface,
        @inject('TokenManagerService')
        private readonly tokenManagerService: TokenManagerServiceInterface,
        @inject('AuthenticateNotifierService')
        private readonly authenticateNotifierService: AuthenticateNotifierServiceInterface
    ) {}

    public async execute(authenticateInput: AuthenticateInput): Promise<AuthenticateOutput> {
        const account = await this.accountRepository.findByEmail(authenticateInput.email);

        if (!account) {
            throw new InvalidCredentialsException();
        }

        if (!(await this.passwordManagerService.verify(authenticateInput.password, account.hash))) {
            throw new InvalidCredentialsException();
        }

        const token = await this.tokenManagerService.create(String(account.id));

        await this.authenticateNotifierService.notify(account);

        return { token, roles:[] };
    }
}
