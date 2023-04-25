import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from '../room/room.entity';
import { UserEntity } from '../user/user.entity';

@Entity('booking')
export class BookingEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'timestamp' })
    start_date: string;

  @Column({ type: 'timestamp' })
    end_date: string;

  @OneToOne(() => RoomEntity)
  @JoinColumn({ name: 'room_id' })
    room: RoomEntity;

  @ManyToOne(() => UserEntity, (user) => user.booking)
  @JoinColumn({ name: 'user_id' })
    user: UserEntity
}
