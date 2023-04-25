import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from '../role/role.service';
import { Roles } from '../../types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
              private roleService: RoleService) {
  }

  async create(userDto: CreateUserDto) {
    const user = await this.userRepository.create(userDto);
    user.role = await this.roleService.getRoleByValue(Roles.USER)
    return this.userRepository.save(user);
  }

  update(id: number, userDto: CreateUserDto) {
    return this.userRepository.update({ id }, userDto)
  }

  getAll() {
    return this.userRepository.find();
  }

  getById(id: number) {
    return this.userRepository.findOne({ where: { id }, relations: { role: true } });
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email }, relations: { role: true } })
  }
}
