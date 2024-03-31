import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async findAll():Promise<User[]>{
        return this.userModel.find().exec();
    }
    async findOne(id:string):Promise<User>{
        return this.userModel.findById(id).exec();
    }
    
    async create(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
      }
      async update(id:string , UserDto:UserDto):Promise<User>{
        return this.userModel.findByIdAndUpdate(id,UserDto,{new:true}).exec();
      }
      async remove(id: string): Promise<void> {
        await this.userModel.findByIdAndDelete(id).exec();
      }
}
