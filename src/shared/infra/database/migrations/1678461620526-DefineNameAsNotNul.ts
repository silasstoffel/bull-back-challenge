import { MigrationInterface, QueryRunner } from "typeorm";

export class DefineNameAsNotNul1678461620526 implements MigrationInterface {
    name = 'DefineNameAsNotNul1678461620526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "name" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "name" SET DEFAULT NULL`);
    }

}
