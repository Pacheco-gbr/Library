import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { LoanEntity } from "./loan.entity";
import BaseEntity from "./base-entity.entity";

@Entity({ name: "librarians" })
export class LibrarianEntity extends BaseEntity {
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToOne(() => LoanEntity, (entity) => entity.librarian)
    @JoinColumn({ name: "loan_id", referencedColumnName: "id" })
    loan?: LoanEntity;
}
