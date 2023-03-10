import { errorMapping } from "./error-mapping";

export class InvalidCredentialsException extends Error {
    public readonly name = 'InvalidCredentialsException';

    constructor(public readonly code = 'INVALID_CREDENTIALS') {
        super(errorMapping.get(code));
    }
}
