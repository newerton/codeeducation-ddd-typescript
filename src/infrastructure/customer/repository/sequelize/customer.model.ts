import {
  Table,
  Model,
  PrimaryKey,
  Column,
  Sequelize,
  DataType,
} from "sequelize-typescript";

@Table({
  tableName: "customers",
  timestamps: false,
})
export default class CustomerModel extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare street: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare number: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare zipcode: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare city: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare active: boolean;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare rewardPoints: number;
}
