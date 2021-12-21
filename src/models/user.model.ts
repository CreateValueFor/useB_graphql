import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Company } from './company.model'
/** All built-in and custom scalars, mapped to their actual values */

@Table({
  tableName: 'tb_user',
})
export class User extends Model<User> {
  @Column({ primaryKey: true })
  id!: number

  @ForeignKey(() => Company) // Company를 참조하는 외래키라른 것을 명시
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
