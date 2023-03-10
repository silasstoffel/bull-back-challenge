import { errorMapping } from "./error-mapping";

export class AccountNotFoundException extends Error {
    public readonly name = 'AccountNotFoundException';

    public readonly code = 'ACCOUNT_NOT_FOUND';

    constructor() {
        super(errorMapping.get('ACCOUNT_NOT_FOUND'));
    }
}
