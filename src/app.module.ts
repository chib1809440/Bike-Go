import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tmchi1410:RECw68bkohaAymI8@bikego.upxs97d.mongodb.net/bikeGo',
    ),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
