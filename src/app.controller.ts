import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.appService.getAllUsers();
  }

  @Post()
  postNewUser(@Body('name') name: string): Promise<User>{
    return this.appService.insertNewUser({name});
  }
  @Put('/:id')
  putUsers(@Param('id', ParseIntPipe) id: number, @Body('name') name?: string){
    return this.appService.updateUser({id, name});
  }

  @Delete('/soft/:id')
  softDeleteUser(@Param('id', ParseIntPipe) id: number){
    return this.appService.softDeleteUser(id);
  }
  @Delete('/:id')
  permanentlyDeleteUser(@Param('id', ParseIntPipe) id: number){
    // return this.appService.deleteUser(id);
    return this.appService.deleteAndReturn(id);
  }
  
}
