import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Kucoin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: "decimal", precision: 20, scale: 8 })
  price!: number;
}
