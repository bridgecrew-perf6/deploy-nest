import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration202203101646886233144 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
