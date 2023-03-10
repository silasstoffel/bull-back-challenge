import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAccountTable1678407848501 implements MigrationInterface {
    name = 'CreateAccountTable1678407848501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(60) NOT NULL, "cpf" character varying(11) NOT NULL, "hash" character varying(50) NOT NULL, "blocked" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4c8f96ccf523e9a3faefd5bdd4c" UNIQUE ("email"), CONSTRAINT "UQ_050bd85c0297a4f44ce2c64a27b" UNIQUE ("cpf"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
