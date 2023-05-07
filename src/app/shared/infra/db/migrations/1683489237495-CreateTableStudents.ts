import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableStudents1683489237495 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "students",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "11",
                        isNullable: false,
                    },
                    {
                        name: "address",
                        type: "varchar",
                        length: "200",
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
        await queryRunner.dropTable('students', true, true, true)
    }
}
