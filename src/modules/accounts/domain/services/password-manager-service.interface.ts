export interface PasswordManagerServiceInterface {
    create(password: string): Promise<string>
    verify(password: string, hash:string): Promise<boolean>
}
