import request from 'supertest';

import { initializeDataSource } from "../../../../../helpers/setup-data-source";
import { app } from "../../../../../../src/shared/infra/http/app";

describe("LoadAccountController", () => {

    let token: string;
    const name = "Account 3";
    const id = "6bc53670-8747-4245-bc6f-458cf735f476";

    beforeAll(async () => {
        await initializeDataSource();

        const data = await request(app)
        .post('/auth')
        .send({
            email: "account3@bull.com.br",
            password: "123456"
        }).expect(200);

        token = data.body.token;
    });

    describe("when the credentials are correctly", () => {
        it('should return account info', async() => {
            const response = await request(app).get('/auth/me').set({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }).send();

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id', id);
            expect(response.body).toHaveProperty('name', name);
        });
    });

    describe("when the bearer property is not valid or expired", () => {
        it('should return 401 http status', async() => {
            const bearer = "Bearer invalid-value"
            const response = await request(app)
                .get('/auth/me')
                .set({ Authorization: bearer })
                .send();

            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('code', 'ACCESS_UNAUTHORIZED_FORCED');
        });
    });

});
