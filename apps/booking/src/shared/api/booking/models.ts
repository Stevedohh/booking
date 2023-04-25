import { Room } from '../room/models';
import { RawUser } from '../../../features/user/models';

export type CreateBooking = Partial<{
  room_id: number | null,
  start_date: string | null,
  end_date: string | null,
  email: string | null,
  phone: string | null,
  first_name: string | null,
  second_name: string | null,
  user?: number | null,
}>

export type Booking = {
  id: number,
  start_date: number,
  end_date: number,
  room: Room,
  user?: RawUser,
}
