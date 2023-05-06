import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { LoanEntity } from "./loan.entity";

@Entity({ name: "book" })
export class BookEntity extends BaseEntity {
    @Column()
    title!: string;

    @Column()
    synopsis!: string;

    @Column()
    author!: string;

    @OneToOne(() => LoanEntity, (entity) => entity.book)
    @JoinColumn({ name: 'loan_id', referencedColumnName: 'id' })
    loan?: LoanEntity;
}