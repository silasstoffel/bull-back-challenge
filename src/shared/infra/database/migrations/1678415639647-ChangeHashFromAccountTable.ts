import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeHashFromAccountTable1678415639647 implements MigrationInterface {
    name = 'ChangeHashFromAccountTable1678415639647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "hash"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "hash" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "hash"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "hash" character varying(50) NOT NULL`);
    }

}
