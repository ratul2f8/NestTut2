import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1640185403208 implements MigrationInterface {
    name = 'UserMigration1640185403208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "deletedAt" datetime)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
