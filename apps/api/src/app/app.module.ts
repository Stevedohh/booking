import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/config.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from '../features/role/role.module';
import { UserModule } from '../features/user/user.module';
import { AuthModule } from '../features/auth/auth.module';
import { RoomModule } from '../features/room/room.module';
import { BookingModule } from '../features/booking/booking.module';
import { AuthMiddleware } from '../features/auth/auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    RoleModule,
    UserModule,
    AuthModule,
    RoomModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }

}
