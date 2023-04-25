import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    people_count: number;

  @Column()
    bed_type: string;

  @Column()
    price: number;

  @Column()
    title: string;

  @Column()
    description: string;

  @Column()
    image_url: string;

  @Column()
    long_description: string;

  @Column()
    subtitle: string;
}
