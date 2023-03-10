import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    public id?: string;

    @Column({
        length: 60,
        type: "varchar",
        unique: true
    })
    public email!: string;

    @Column({
        length: 11,
        type: "varchar",
        unique: true
    })
    public cpf!: string;

    @Column({
        length: 150,
        type: "varchar"
    })
    public hash!: string;

    @Column({ type: "boolean" })
    public blocked?: boolean = false;

    @CreateDateColumn()
    public createdAt?: Date;

    @UpdateDateColumn()
    public updatedAt?: Date
}
