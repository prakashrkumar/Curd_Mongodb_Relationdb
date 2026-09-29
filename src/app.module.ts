import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import { StudentModule } from './student/student.module.js';
import { UserModule } from './user/user.module.js';
import { EmployeeModule } from './employee/employee.module.js';
import { ProductModule } from './product/product.module.js';
import { LibraryModule } from './library/library.module.js';
import { ProjectModule } from './project/project.module.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentModule,
    UserModule,
    EmployeeModule,
    ProductModule,
    LibraryModule,
    ProjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
