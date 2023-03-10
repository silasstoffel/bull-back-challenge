import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateDefaultAccounts1678416022667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into account (id, blocked, cpf, email, hash) values ('b296c754-6a10-41ce-a333-1d4940acc1d4', false, '0000000001', 'account1@bull.com.br', '$2b$08$pq31Mm91E7G4/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju')`);
        await queryRunner.query(`insert into account (id, blocked, cpf, email, hash) values ('f71bf306-9e32-41f7-993d-e363d2f65b15', false, '0000000002', 'account2@bull.com.br', '$2b$08$pq31Mm91E7G4/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju')`);
        await queryRunner.query(`insert into account (id, blocked, cpf, email, hash) values ('6bc53670-8747-4245-bc6f-458cf735f476', false, '0000000003', 'account3@bull.com.br', '$2b$08$pq31Mm91E7G4/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju')`);
        await queryRunner.query(`insert into account (id, blocked, cpf, email, hash) values ('68e050f8-14ad-4a5a-99eb-97c22089ce04', true, '0000000004', 'account4@bull.com.br', '$2b$08$pq31Mm91E7G4/pEaZCfymu7fSqB4hIxrx50By5ThXAMm3wG4DPLju')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('delete from accounts');
    }

}
