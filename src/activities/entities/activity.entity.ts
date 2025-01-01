import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    completed: boolean;
}
