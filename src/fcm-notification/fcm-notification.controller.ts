import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { FcmNotificationService } from './fcm-notification.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCookieAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

class pushNotificationDto {
  token: string;
}

@ApiCookieAuth()
@ApiTags('firebase')
@Controller('firebase')
@UseGuards(AuthGuard)
export class FcmNotificationController {
  constructor(
    private readonly fcmNotificationService: FcmNotificationService,
  ) {}

  @Post('send-notification')
  @ApiBearerAuth()
  @ApiBody({
    type: pushNotificationDto,
    examples: {
      data: {
        value: {
          token: 'asdasd-qeqeqeee',
        } as pushNotificationDto,
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Push notification successfully!',
  })
  async sendNotidication(@Body() body: { token: string }) {
    const { token } = body;
    return await this.fcmNotificationService.sendingNotificationOneUser(token);
  }
}
