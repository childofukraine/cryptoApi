import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CoinPaprika {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price!: number;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price30m!: number;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price1h!: number;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price6h!: number;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price12h!: number;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price24h!: number;
}
