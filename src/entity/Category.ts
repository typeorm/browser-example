import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

}