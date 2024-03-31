import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthDto, SignInDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOne(signInDto.phoneNumber);
    if (!(await bcrypt.compare(signInDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, phoneNumber: signInDto.phoneNumber };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: AuthDto): Promise<string> {
    if (
      (signUpDto.password && signUpDto.password.length == 0) ||
      (signUpDto.rePassword && signUpDto?.rePassword.length == 0) ||
      signUpDto.password !== signUpDto.rePassword
    ) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }
    const user = await this.usersService.findOne(signUpDto.phoneNumber);

    if (user !== null) {
      throw new HttpException('EXISTED', HttpStatus.CONFLICT);
    }
    const hash = await bcrypt.hash(signUpDto.password, 10);
    signUpDto.password = hash;
    await this.usersService.create(signUpDto);
    return `Register ${signUpDto.phoneNumber} successfully`;
  }
}
