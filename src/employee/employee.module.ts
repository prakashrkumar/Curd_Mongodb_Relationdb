import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller.js';
import { EmployeeService } from './employee.service.js';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EmplooyeeSchema, Employee } from './schemas/employee.schema.js';
import { Profile, ProfileSchema } from './schemas/profile.schema.js';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Employee.name,schema:EmplooyeeSchema},
      {name:Profile.name,schema:ProfileSchema}
    ])
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
