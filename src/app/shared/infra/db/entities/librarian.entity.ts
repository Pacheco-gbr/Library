import { BaseEntity, Column, Entity } from "typeorm";
import { Profile } from "../../../domain/enums";


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
}