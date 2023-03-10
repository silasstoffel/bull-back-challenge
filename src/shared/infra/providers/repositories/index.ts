import { container } from "tsyringe";
import { AccountRepositoryInterface } from "../../../../modules/accounts/domain/account-repository.interface";
import { AccountRepository } from "../../../../modules/accounts/infra/database/account.repository";


container.registerSingleton<AccountRepositoryInterface>('AccountRepository', AccountRepository);
