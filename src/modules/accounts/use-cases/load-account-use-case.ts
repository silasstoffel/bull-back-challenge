import { injectable, inject } from "tsyringe";

import { AccountRepositoryInterface } from "../domain/account-repository.interface";
import { AccountNotFoundException } from "../domain/exceptions/account-not-found.exception";
import { LoadAccountOutput } from "./load-account.output ";

@injectable()
export class LoadAccountUseCase {

    public constructor(
        @inject('AccountRepository')
        private readonly accountRepository: AccountRepositoryInterface,
    ) {}

    public async execute(id: string): Promise<LoadAccountOutput> {
        const account = await this.accountRepository.findById(id);

        if (!account) {
            throw new AccountNotFoundException();
        }

        return {
            id: account.id,
            name: account.name,
            email: account.email,
            cpf: account.cpf
        } as LoadAccountOutput;
    }
}
