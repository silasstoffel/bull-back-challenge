import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function GuardMiddleware (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            code: 'ACCESS_UNAUTHORIZED',
            message: 'Unauthorized'
        });
    }

    const [, token] = authHeader.split(" ");
    const secret = process.env?.JWT_SECRET || ''

    try {
        const { sub } = verify(token, secret) as IPayload;
        req.accountId = sub;
        return next();
    } catch (error) {
        return res.status(401).json({
            code: 'ACCESS_UNAUTHORIZED',
            message: 'Unauthorized.'
        });
    }
}
