import { Table, Column, Model } from 'sequelize-typescript'
/** All built-in and custom scalars, mapped to their actual values */

@Table({
  tableName: 'tb_company',
})
export class Company extends Model<Company> {
  @Column({ primaryKey: true })
  id!: number

  @Column
  company!: string

  @Column
  domain!: string
}
