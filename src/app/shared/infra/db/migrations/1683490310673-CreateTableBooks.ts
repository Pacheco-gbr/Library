import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableBooks1683490310673 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "synopsis",
                        type: "text",
                        isNullable: false,
                    },
                    {
                        name: "author",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "varchar",
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
        await queryRunner.dropTable("books", true, true, true);
    }
}
