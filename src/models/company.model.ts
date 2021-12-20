import { Table, Column, Model, HasMany, ForeignKey } from 'sequelize-typescript'
import { User } from './user.model'
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

  @HasMany(() => User) // 일대 다 관계일때 명시해준다.
  users: User[] | undefined // 이건 새로운 컬럼으로 graphql에 명시된다. mysql의 as로 alias명시라 비슷함.
}
