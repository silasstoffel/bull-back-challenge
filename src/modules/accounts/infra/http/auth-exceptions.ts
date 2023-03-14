
import { Response } from "express";
import { AccountNotFoundException } from "../../domain/exceptions/account-not-found.exception";
import { BlockedAccountException } from "../../domain/exceptions/blocked-account.exception";
import { InvalidCredentialsException } from "../../domain/exceptions/invalid-credentials.exception";

export class AuthException {
    public static resolve(res: Response, error: unknown): Response {

        if (error instanceof InvalidCredentialsException) {
            const { code, message } = error;
            return res.status(403).json({ code, message });
        }

        if (error instanceof AccountNotFoundException) {
            const { code, message } = error;
            return res.status(404).json({ code, message });
        }

        if (error instanceof BlockedAccountException) {
            const { code, message } = error;
            return res.status(403).json({ code, message });
        }


        let detail = undefined;
        let stack = undefined;

        if (process.env.ENVIRONMENT === 'development') {
            const exc = error as Error;
            detail = exc.message;
            stack = exc.stack;
        }

        return res.status(500).json({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error.',
            detail,
            stack
        });
    }
}
