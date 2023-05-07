import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableLoans1683491141656 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "student_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "librarian_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "book_id",
                        type: "uuid",
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
                foreignKeys: [
                    {
                        columnNames: ["student_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "students",
                        name: "fk_orders_students",
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["librarian_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "librarians",
                        name: "fk_orders_librarians",
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["book_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "books",
                        name: "fk_orders_books",
                        onDelete: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('loans', true, true, true)
    }
}
