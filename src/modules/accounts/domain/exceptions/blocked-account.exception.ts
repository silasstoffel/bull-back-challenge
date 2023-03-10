import { errorMapping } from "./error-mapping";

export class BlockedAccountException extends Error {
    public readonly name = 'BlockedAccountException';

    public readonly code = 'BLOCKED_ACCOUNT';

    constructor() {
        super(errorMapping.get('BLOCKED_ACCOUNT'));
    }
}
