import { Entity, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { StudentEntity } from "./student.entity";
import { LibrarianEntity } from "./librarian.entity";
import { BookEntity } from "./book.entity";

@Entity({ name: "loans" })
export class LoanEntity extends BaseEntity {
    @OneToOne(() => StudentEntity, (entity) => entity.loan)
    @JoinColumn({ name: "student_id", referencedColumnName: "id" })
    student!: StudentEntity;

    @OneToOne(() => LibrarianEntity, (entity) => entity.loan)
    @JoinColumn({ name: "librarian_id", referencedColumnName: "id" })
    librarian!: LibrarianEntity;

    @OneToOne(() => BookEntity, (entity) => entity.loan)
    @JoinColumn({ name: "book_id", referencedColumnName: "id" })
    book!: BookEntity;
}