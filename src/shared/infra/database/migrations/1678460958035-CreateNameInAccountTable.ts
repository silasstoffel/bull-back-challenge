import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNameInAccountTable1678460958035 implements MigrationInterface {
    name = 'CreateNameInAccountTable1678460958035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ADD "name" character varying(80) default null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "name"`);
    }

}
