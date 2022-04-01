"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration202203101646886233144 = void 0;
class migration202203101646886233144 {
    constructor() {
        this.name = 'migration202203101646886233144';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
    }
}
exports.migration202203101646886233144 = migration202203101646886233144;
//# sourceMappingURL=1646886233144-migration20220310.js.map