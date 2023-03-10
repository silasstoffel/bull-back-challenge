import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertAccountName1678461259264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`update account set name = 'Account 1' where id = 'b296c754-6a10-41ce-a333-1d4940acc1d4'`);
        await queryRunner.query(`update account set name = 'Account 2' where id = 'f71bf306-9e32-41f7-993d-e363d2f65b15'`);
        await queryRunner.query(`update account set name = 'Account 3' where id = '6bc53670-8747-4245-bc6f-458cf735f476'`);
        await queryRunner.query(`update account set name = 'Account 4' where id = '68e050f8-14ad-4a5a-99eb-97c22089ce04'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}
