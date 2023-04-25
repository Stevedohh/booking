import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserEntity } from '../user/user.entity';
import { LoginUserDto } from '../user/dto/login-user.dto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    const hashPassword = await bcrypt.hash(userDto.password, 5);

    if (candidate && candidate.password) {
      throw new HttpException('Користувач з таким email вже існує', HttpStatus.BAD_REQUEST);
    }

    if(candidate && !candidate.password) {
      await this.userService.update(candidate.id, { ...userDto, password: hashPassword })

      return this.generateToken({ ...candidate, password: hashPassword })
    }

    const user = await this.userService.create({ ...userDto, password: hashPassword })

    return this.generateToken(user)
  }


  async update(userId: number, userDto: CreateUserDto) {
    const candidate = await this.userService.getById(userId);
    const hashPassword = await bcrypt.hash(userDto.password, 5);

    await this.userService.update(userId, { ...userDto, password: hashPassword })

    return this.generateToken({ ...userDto, role: candidate.role, id: candidate.id, password: hashPassword } as UserEntity)
  }

  private async generateToken(user: UserEntity) {
    const payload = {
      id: user.id,
      firstName: user.first_name,
      secondName: user.second_name,
      phone: user.phone,
      email: user.email,
      role: user.role,
    }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: CreateUserDto | LoginUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Невірний email або пароль' })
  }
}
