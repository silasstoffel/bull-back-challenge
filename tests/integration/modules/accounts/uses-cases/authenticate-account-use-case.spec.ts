import { AuthenticateAccountUseCase } from "../../../../../src/modules/accounts/use-cases/authenticate-account-use-case";
import { container } from "tsyringe";
import { initializeDataSource } from "../../../../helpers/setup-data-source";
import { InvalidCredentialsException } from "../../../../../src/modules/accounts/domain/exceptions/invalid-credentials.exception";

describe('AuthenticateAccountUseCase', () => {

    const useCase = container.resolve(AuthenticateAccountUseCase);

    beforeAll(async () => {
        await initializeDataSource();
    });

    describe('when the credentials are correctly', () => {
        it('should be able to authenticate', async() => {
            const data = await useCase.execute({ email: 'account1@bull.com.br', password: '123456'});
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

});
