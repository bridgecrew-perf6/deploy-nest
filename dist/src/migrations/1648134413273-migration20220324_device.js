"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration20220324Device1648134413273 = void 0;
class migration20220324Device1648134413273 {
    constructor() {
        this.name = 'migration20220324Device1648134413273';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`device\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_by\` varchar(255) NOT NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`socket_id\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, \`is_deleted\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`device\``);
    }
}
exports.migration20220324Device1648134413273 = migration20220324Device1648134413273;
//# sourceMappingURL=1648134413273-migration20220324_device.js.map