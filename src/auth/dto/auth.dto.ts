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
  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  password: string;
}
