import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, IsNull } from "typeorm"

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    public id?: string;

    @Column({
        length: 80,
        type: "varchar",
        nullable: false,
    })
    public name!: string | null;

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
    public blocked = false;

    @CreateDateColumn()
    public createdAt?: Date;

    @UpdateDateColumn()
    public updatedAt?: Date
}
