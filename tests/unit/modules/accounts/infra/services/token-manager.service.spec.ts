
import { TokenManagerService } from "../../../../../../src/modules/accounts/infra/services/token-manager.service";
import { faker } from '@faker-js/faker';

describe('TokenManagerService', () => {

   const tokenManagerService = new TokenManagerService();
   const accountId = faker.datatype.uuid();

    describe('#create', () => {
        it('should be able to create a token', async () => {
            expect(tokenManagerService.create(accountId)).resolves.not.toThrow();
        });
    });

    describe('#verify', () => {
        let jwt: string;

        beforeAll(async() => {
            jwt = await tokenManagerService.create(accountId);
        });

        it('should be able to validate a token', async () => {
            const data = await tokenManagerService.verify(jwt);
            expect(data.sub).toBe(accountId);
        });

        it('should not be able to validate a token', async () => {
            const data = await tokenManagerService.verify(jwt);
            expect(data.sub).not.toBe(faker.datatype.uuid());
        });

    });

});


