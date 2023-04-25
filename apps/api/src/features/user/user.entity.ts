import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { BookingEntity } from '../booking/booking.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    email: string;

  @Column()
    password: string;

  @Column()
    first_name: string;

  @Column()
    second_name: string;

  @Column()
    phone: string;

  @OneToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id' })
    role: RoleEntity;

  @OneToMany(() => BookingEntity, (booking) => booking.user)
    booking: BookingEntity[];
}
