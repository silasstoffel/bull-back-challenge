import { PasswordManagerService } from "../../../../../../src/modules/accounts/infra/services/password-manager.service";

describe('PasswordManagerService', () => {

   const passwordManagerService = new PasswordManagerService();
   const decryptPassword = '@faker-password';

    describe('#create', () => {
        it('should be able to create a new password', async () => {
            const password = await passwordManagerService.create(decryptPassword);
            expect(password).not.toBeNull();
            expect(password).not.toEqual(decryptPassword);
        });
    });

    describe('#verify', () => {
        let password: string;

        beforeAll(async() => {
            password = await passwordManagerService.create(decryptPassword);
        })

        it('should be verified', async() => {
            const isEqual = await passwordManagerService.verify(decryptPassword, password);
            expect(isEqual).toBe(true);
        });

        it('should be not verified', async() => {
            const isEqual = await passwordManagerService.verify('user-password', password);
            expect(isEqual).toBeFalsy()
        });
    });

});


