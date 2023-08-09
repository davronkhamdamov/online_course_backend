import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;
  @Column({ type: 'varchar', default: 'user' })
  isAdmin: string;
  @Column({ type: 'varchar', nullable: false })
  username: string;
  @Column({ type: 'varchar', nullable: false })
  user_id: string;
}
