import { Account } from "../account.entity";


export interface AuthenticateNotifierServiceInterface {
    notify(account: Account): Promise<void>
}
