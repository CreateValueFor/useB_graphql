import { Table, Column, Model } from 'sequelize-typescript'
import { Col } from 'sequelize/types/lib/utils'

@Table({
  tableName: 'tb_invoice',
})
export class Invoice extends Model<Invoice> {
  @Column({ primaryKey: true })
  id!: number

  @Column
  userid!: string

  @Column
  apidate!: string

  @Column
  ocr_total!: number
  @Column
  ocr_invalid!: number
  @Column
  ocr_month_calls!: number
  @Column
  ocr_month_fee!: number
  @Column
  ocr_unit_standard!: number
  @Column
  ocr_unit_price!: number
  @Column
  ocr_discount!: number

  @Column
  status_total!: number
  @Column
  status_invalid!: number
  @Column
  status_month_calls!: number
  @Column
  status_month_fee!: number
  @Column
  status_unit_standard!: number
  @Column
  status_unit_price!: number
  @Column
  status_discount!: number

  @Column
  openbank_total!: number
  @Column
  openbank_invalid!: number
  @Column
  openbank_month_calls!: number
  @Column
  openbank_month_fee!: number
  @Column
  openbank_unit_standard!: number
  @Column
  openbank_unit_price!: number
  @Column
  openbank_discount!: number

  @Column
  face_total!: number
  @Column
  face_invalid!: number
  @Column
  face_month_calls!: number
  @Column
  face_month_fee!: number
  @Column
  face_unit_standard!: number
  @Column
  face_unit_price!: number
  @Column
  face_discount!: number

  @Column
  ocr_doc_total!: number
  @Column
  ocr_doc_invalid!: number
  @Column
  ocr_doc_month_calls!: number
  @Column
  ocr_doc_month_fee!: number
  @Column
  ocr_doc_unit_standard!: number
  @Column
  ocr_doc_unit_price!: number
  @Column
  ocr_doc_discount!: number

  @Column
  status_doc_total!: number
  @Column
  status_doc_invalid!: number
  @Column
  status_doc_month_calls!: number
  @Column
  status_doc_month_fee!: number
  @Column
  status_doc_unit_standard!: number
  @Column
  status_doc_unit_price!: number
  @Column
  status_doc_discount!: number

  @Column
  annual!: number
  @Column
  license!: number
  @Column
  deposit!: number
  @Column
  coupon!: number
  @Column
  total_fee!: number
  @Column
  flag!: number
}
