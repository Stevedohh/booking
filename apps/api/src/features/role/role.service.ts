import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { Roles } from '../../types';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(RoleEntity) private roleRepository) {
  }

  createRole(roleDto: CreateRoleDto) {
    return this.roleRepository.save(roleDto)
  }

  getRoleByValue(value: Roles) {
    return this.roleRepository.findOne({ where: { value } })
  }
}
