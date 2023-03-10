import { container } from "tsyringe";
import { AuthenticateNotifierServiceInterface } from "../../../../modules/accounts/domain/services/authenticate-notifier-service.interface";
import { PasswordManagerServiceInterface } from "../../../../modules/accounts/domain/services/password-manager-service.interface";
import { TokenManagerServiceInterface } from "../../../../modules/accounts/domain/services/token-manager-service.interface";
import { AuthenticateNotifierService } from "../../../../modules/accounts/infra/services/authenticate-notifier.service";
import { PasswordManagerService } from "../../../../modules/accounts/infra/services/password-manager.service";
import { TokenManagerService } from "../../../../modules/accounts/infra/services/token-manager.service";


container.registerSingleton<PasswordManagerServiceInterface>(
    "PasswordManagerService",
    PasswordManagerService
);

container.registerSingleton<TokenManagerServiceInterface>(
    "TokenManagerService",
    TokenManagerService
);

container.registerSingleton<AuthenticateNotifierServiceInterface>(
    "AuthenticateNotifierService",
    AuthenticateNotifierService
);
