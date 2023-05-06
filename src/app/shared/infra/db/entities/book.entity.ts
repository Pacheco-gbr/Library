import { Column, Entity } from "typeorm";
import BaseEntity from "./base-entity.entity";

@Entity({ name: "book" })
export class BookEntity extends BaseEntity {
    @Column()
    title!: string;

    @Column()
    synopsis!: string;

    @Column()
    author!: string;
}