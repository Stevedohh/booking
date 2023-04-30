import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService, private userService: UserService) {
  }

  async use(req: Request | any, res: Response, next: () => void) {
    const bearerHeader = req.headers.authorization;
    const accessToken = bearerHeader && bearerHeader.split(' ')[1];

    if (!bearerHeader || !accessToken) {
      return next();
    }

    const { email } = this.jwtService.verify(accessToken);
    const user = await this.userService.getUserByEmail(email);
    if (user) {
      req.user = user;
    }
    next();
  }
}

