
import e, { Response } from "express";
import { InvalidCredentialsException } from "../../domain/exceptions/invalid-credentials.exeception";

export class AuthException {
    public static resolve(res: Response, error: unknown): Response {
        if (error instanceof InvalidCredentialsException) {
            const err = error as InvalidCredentialsException;
            const { code, message } = err;
            return res.status(403).json({code, message});
        }

        if (error instanceof Error) {
            const err = error as Error;
            const { message } = err;
            return res.status(403).json({ message});
        }

        return res.status(500).json({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error'});
    }
}
