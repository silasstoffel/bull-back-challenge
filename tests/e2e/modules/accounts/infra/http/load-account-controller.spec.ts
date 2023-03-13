import { initializeDataSource } from "../../../../../helpers/setup-data-source";
import request, { agent as supertest } from 'supertest';
import { app } from "../../../../../../src/shared/infra/http/app";

describe("LoadAccountController", () => {

    let bearer: string;
    const name = "Account 3";
    const id = "6bc53670-8747-4245-bc6f-458cf735f476";
    const httpClient = supertest(app);

    beforeAll(async () => {
        await initializeDataSource();

        const data = await request(app)
        .post('/auth')
        .send({
            email: "account3@bull.com.br",
            password: "123456"
        }).expect(200);

        httpClient.auth(data.body.token, { type: 'bearer' })
    });

    describe("when the credentials are correctly", () => {
        it('should return account info', async() => {
            console.log(bearer);
            const response = await httpClient.get('/auth/me');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id', id);
            expect(response.body).toHaveProperty('name', name);
        });
    });

    describe("when the bearer property is not valid or expired", () => {
        it('should return 401 http status', async() => {
            bearer = "Bearer invalid-value"
            await request(app).get('/auth/me').set({ Authorization: bearer }).expect(401);
        });
    });

});
