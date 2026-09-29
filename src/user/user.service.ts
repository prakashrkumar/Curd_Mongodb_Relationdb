import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema.js';
import  {Model} from 'mongoose'
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name)private userModel:Model<User>)  {}
  async createUser():Promise<User>{
    const user=new this.userModel({
        name:"prakash",
        address:{
            street:'121 street',
            city:"madhubani"
        }
    })
    return user.save()
  }
  async findAll():Promise<User[]>{
    return this.userModel.find()
  }
}
