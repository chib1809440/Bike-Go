import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @Expose()
  @IsNotEmpty()
  phoneNumber: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Expose()
  email: string;

  @Expose()
  @IsString()
  gender: string;

  @Expose()
  @IsNotEmpty()
  dob: string;

  @Exclude()
  password: string;

  @Exclude()
  rePassword: string;

  @Expose()
  invitationCode: string;
}

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  public_key: string;
}
