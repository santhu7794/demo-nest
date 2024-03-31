import { Controller, Get, Param ,Body, Post,Put,Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { UserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly UserService:UserService){}
    @Get()
    async findAll():Promise<User[]>{
        return this.UserService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id')id:string):Promise<User>{
        return this.UserService.findOne(id);
    }
    @Post()
  async create(@Body() userDto: UserDto): Promise<User> {
    return this.UserService.create(userDto);
  }
  @Put(':id')
  async update(@Param('id')id:string  ,@Body() UserDto:UserDto):Promise<User>{
    return this.UserService.update(id ,UserDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.UserService.remove(id);
  }


}
