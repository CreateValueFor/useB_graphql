import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'Admin',
})
export class Admin extends Model<Admin> {
  @Column({ primaryKey: true })
  userID!: string
}
