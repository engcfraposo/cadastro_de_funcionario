import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zip: string;
  @Column()
  country: string;
  @Column()
  cpf: string;
  @Column()
  rg: string;
  @Column()
  job: string;
  @Column()
  salary: number;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
