import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration202203031646324644075 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
