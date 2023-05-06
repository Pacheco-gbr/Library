import { BaseEntity, Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Profile } from "../../../domain/enums";
import { LoanEntity } from "./loan.entity";


@Entity({ name: 'librarians'})
export class LibrarianEntity extends BaseEntity{
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column({type: 'enum', enum: Profile})
    profile!: Profile;

    @OneToOne(() => LoanEntity, (entity) => entity.librarian)
    @JoinColumn({ name: 'loan_id', referencedColumnName: 'id'})
    loan?: LoanEntity;

}