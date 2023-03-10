import { AuthenticateAccountUseCase } from "../../../../../src/modules/accounts/use-cases/authenticate-account-use-case";
import { container } from "tsyringe";
import { initializeDataSource } from "../../../../helpers/setup-data-source";
import { InvalidCredentialsException } from "../../../../../src/modules/accounts/domain/exceptions/invalid-credentials.exception";
import { BlockedAccountException } from "../../../../../src/modules/accounts/domain/exceptions/blocked-account.exception";

describe('AuthenticateAccountUseCase', () => {

    const useCase = container.resolve(AuthenticateAccountUseCase);
    const password = '123456';

    beforeAll(async () => {
        await initializeDataSource();
    });

    describe('when the credentials are correctly', () => {
        it('should be able to authenticate', async() => {
            const data = await useCase.execute({ email: 'account1@bull.com.br', password});
            expect(data).toHaveProperty('token')
        });
    });

    describe('when the credentials are not correctly', () => {
        it('should thrown invalid credentials error', async() => {
            expect(useCase.execute({ email: 'account1@bull.com.br', password: 'wrong-password'}))
            .rejects
            .toThrow(InvalidCredentialsException);
        });
    });

    describe('when account is blocked', () => {
        it('should thrown a blocked account exception', async() => {
            expect(useCase.execute({ email: 'account4@bull.com.br', password}))
            .rejects
            .toThrow(BlockedAccountException);
        });
    });

});
