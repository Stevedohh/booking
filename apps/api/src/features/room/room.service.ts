import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from './room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { Repository } from 'typeorm';

export class RoomService {
  constructor(@InjectRepository(RoomEntity) private roomRepository: Repository<RoomEntity>) {
  }

  getAll() {
    return this.roomRepository.find();
  }

  getById(id: number) {
    return this.roomRepository.findOne({ where: { id } });
  }

  create(roomDto: CreateRoomDto) {
    return this.roomRepository.save(roomDto);
  }

  update(id: number, roomDto: CreateRoomDto) {
    return this.roomRepository.update({ id }, roomDto)
  }

  remove(id: number) {
    return this.roomRepository.delete({ id })
  }
}
