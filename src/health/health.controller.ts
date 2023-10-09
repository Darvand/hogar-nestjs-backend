import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class HealthController {
  private readonly logger = new Logger(HealthController.name);
  @Get('health')
  getHealth() {
    this.logger.log('Checking health endpoint');
    return { message: 'Working...' };
  }
}
