import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableLibrarians1683414478956 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "librarians",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "text",
                        isNullable: false,
                    },
                    {
                        name: "profile",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('librarians', true, true, true)
    }
}
