import { Table, Column, Model } from "sequelize-typescript";

@Table({
    tableName: "tb_invoice"
})

export class Invoice extends Model<Invoice>{

    @Column({primaryKey:true})
    id!: number;

    @Column
    userid!: string;



}