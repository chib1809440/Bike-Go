import { Body, Controller, Headers, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignInDto } from './dto/auth.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({
    type: SignInDto,
    examples: {
      user_1: {
        value: {
          phoneNumber: '0123456789',
          password: '123',
        } as SignInDto,
      },
    },
  })
  signIn(@Body() signInDto: SignInDto, @Headers() headers: Headers) {
    if (headers['x-public-key']) {
      signInDto.public_key = headers['x-public-key'];
    }
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  @ApiBody({
    type: AuthDto,
    examples: {
      user_1: {
        value: {
          phoneNumber: '0123456789',
          fullName: 'Nguyen Van A',
          gender: 'male',
          dob: '01/01/2024',
          password: '123',
          rePassword: '123',
        } as AuthDto,
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Register successfully!',
  })
  @ApiResponse({ status: 409, description: 'Existed.' })
  signUp(@Body() signUpDto: AuthDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('save-public-key')
  savePublicKey(phoneNumber: string, publicKey: string) {
    return this.authService.savePublicKey(phoneNumber, publicKey);
  }
}
