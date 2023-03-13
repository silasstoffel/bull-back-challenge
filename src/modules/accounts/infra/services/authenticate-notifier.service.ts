
import { injectable } from "tsyringe";

import { Account } from "../../domain/account.entity";
import { AuthenticateNotifierServiceInterface } from "../../domain/services/authenticate-notifier-service.interface";


@injectable()
export class AuthenticateNotifierService implements AuthenticateNotifierServiceInterface {
    public async notify(account: Account): Promise<void> {
        // fake implementation to include more security
        // Notifying Account by sms or e-mail or push.
    }
}
