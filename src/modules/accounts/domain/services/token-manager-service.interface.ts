import { VerifyTokenOutput } from "./verify-token.output"

export interface TokenManagerServiceInterface {
    create(password: string): Promise<string>
    verify(password: string, hash:string): Promise<VerifyTokenOutput>
}
