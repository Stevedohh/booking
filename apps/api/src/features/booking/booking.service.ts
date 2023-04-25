import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './booking.entity';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity) private bookingRepository: Repository<BookingEntity>,
    private readonly userService: UserService,
  ) {}

  getAll() {
    return this.bookingRepository.find({ relations: { room: true, user: true }, });
  }

  getById(id: number) {
    return this.bookingRepository.findOne({ where: { id }, relations: { room: true } },)
  }

  getByUser(userId) {
    return this.bookingRepository.find({ where: { user: { id: userId } }, relations: { room: true }  });
  }

  async create(bookingDto: CreateBookingDto) {
    const user = await this.userService.getUserByEmail(bookingDto.email);

    const booking: any = {
      start_date: bookingDto.start_date,
      end_date: bookingDto.end_date,
      room: bookingDto.room_id,
    };

    if (user) {
      booking.user = user.id
    } else {
      const user = await this.userService.create({
        email: bookingDto.email,
        first_name: bookingDto.first_name,
        second_name: bookingDto.second_name,
        phone: bookingDto.phone,
        password: null,
      })

      booking.user = user.id
    }


    return this.bookingRepository.save(booking)
  }

  update(id: number, bookingDto: CreateBookingDto) {
    return this.bookingRepository.update({ id }, bookingDto);
  }

  remove(id: number) {
    return this.bookingRepository.delete({ id });
  }
}
