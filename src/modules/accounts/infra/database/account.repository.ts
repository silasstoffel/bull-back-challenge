
import { injectable } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/infra/database/typeorm/data-source";
import { AccountRepositoryInterface } from "../../domain/account-repository.interface"
import { Account } from "../../domain/account.entity";

@injectable()
export class AccountRepository implements AccountRepositoryInterface {

    private repository: Repository<Account>;

    constructor() {
        this.repository = AppDataSource.getRepository(Account);
    }

    public async findByEmail(email: string): Promise<Account | null> {
        return this.repository.findOne({ where: { email }});
    }
}
