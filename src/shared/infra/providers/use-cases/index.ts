import { container } from "tsyringe";
import { AuthenticateAccountUseCase } from "../../../../modules/accounts/use-cases/authenticate-account-use-case";
import { LoadAccountUseCase } from "../../../../modules/accounts/use-cases/load-account-use-case";


container.register<AuthenticateAccountUseCase>(AuthenticateAccountUseCase, AuthenticateAccountUseCase);
container.register<LoadAccountUseCase>(LoadAccountUseCase, LoadAccountUseCase);
