import { Column, Entity } from "typeorm";
import BaseEntity from "./base-entity.entity";


@Entity({ name: 'student' })
export class StudentEntity extends BaseEntity {
    @Column()
    cpf!: string;
    @Column()
    phone!: string;
    @Column()
    address!: string;
}