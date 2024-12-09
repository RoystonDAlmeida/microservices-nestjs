import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Controller('users')
export class UsersController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async getUsers() {
    const response = await this.httpService
      .get('http://localhost:5672/users')
      .toPromise();
    return response.data;
  }
}
