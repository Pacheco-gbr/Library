import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { LoanEntity } from "./loan.entity";


@Entity({ name: 'student' })
export class StudentEntity extends BaseEntity {
    @Column()
    cpf!: string;
    @Column()
    phone!: string;
    @Column()
    address!: string;
    @OneToOne(() => LoanEntity, (entity) => entity.student)
    @JoinColumn({ name: 'loan_id', referencedColumnName: 'id' })
    loan?: LoanEntity;
}