import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema.js';
import { StudentController } from './student.controller.js';
import { StudentService } from './student.service.js';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:Student.name,schema:StudentSchema
        }])
    ],
    controllers: [StudentController],
    providers: [StudentService]
})
export class StudentModule {}
