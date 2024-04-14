import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FcmNotificationModule } from './fcm-notification/fcm-notification.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tmchi1410:RECw68bkohaAymI8@bikego.upxs97d.mongodb.net/bikeGo',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: '/swagger',
    }),
    UsersModule,
    AuthModule,
    FcmNotificationModule,
  ],
})
export class AppModule {}
