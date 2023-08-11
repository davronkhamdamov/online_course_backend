import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', nullable: false })
  name: string;
  @Column({ type: 'varchar', nullable: false })
  description: string;
  @Column({ type: 'varchar', nullable: false })
  about: string;
  @Column({ type: 'int', nullable: false })
  price: number;
  @Column({ type: 'varchar', nullable: false })
  course_image: string;
  @Column({ type: 'varchar', nullable: false })
  created_by: string;
  @Column({ type: 'varchar', nullable: false })
  category_id: string;
  @Column({ type: 'varchar', nullable: false })
  requirements: string;
  @Column({ type: 'int', nullable: false, default: 0 })
  students: number;
  @Column({ type: 'varchar', nullable: false })
  language: string;
}
