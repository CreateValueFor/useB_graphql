import { Table, Column, Model } from 'sequelize-typescript'
/** All built-in and custom scalars, mapped to their actual values */

@Table({
  tableName: 'tb_user',
})
export class User extends Model<User> {
  @Column({ primaryKey: true })
  id!: number

  @Column
  tb_company_id!: string
  @Column
  username!: string
  @Column
  email!: string
  @Column
  phone!: string
  @Column
  status!: string
}
