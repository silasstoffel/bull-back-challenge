// Override Request of Express

declare namespace Express {
    export interface Request {
        accountId: string
    }
}
