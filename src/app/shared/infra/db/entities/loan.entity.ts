import { Entity, OneToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { StudentEntity } from "./student.entity";
import { LibrarianEntity } from "./librarian.entity";
import { BookEntity } from "./book.entity";

@Entity({ name: 'loans' })
export class LoanEntity extends BaseEntity {
    @OneToOne(() => StudentEntity)
    student!: StudentEntity;

    @OneToOne(() => LibrarianEntity, (entity) => entity.loan)
    librarian!: LibrarianEntity;

    @OneToOne(() =>  BookEntity, (entity) => entity.loan)
    book!: BookEntity;
}