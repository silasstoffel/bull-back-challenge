import { Account } from "./account.entity";

export interface AccountRepositoryInterface {
    findByEmail(email: string): Promise<Account | null>
}
