import { container } from "tsyringe";
import { AuthenticateAccountUseCase } from "../../../../modules/accounts/use-cases/authenticate-account-use-case";


container.register<AuthenticateAccountUseCase>(AuthenticateAccountUseCase, AuthenticateAccountUseCase);
