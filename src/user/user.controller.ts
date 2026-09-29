import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: any) {
    return this.userService.createUser();
  }

  @Get()
  getAll() {
    return this.userService.findAll();
  }
}
