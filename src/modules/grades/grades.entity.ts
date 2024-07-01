import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'grades'})
export class ProfessionsEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?: number;

    @Column({
        name: 'grades',
        type: 'varchar',
        length:100
    })
    grades:string

}