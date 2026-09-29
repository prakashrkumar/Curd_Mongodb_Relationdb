import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller.js';
import { ProjectService } from './project.service.js';
import { Project, ProjectSchema } from './schemas/project.schema.js';
import { DeveloperSchema, Developer } from './schemas/developer.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Developer.name, schema: DeveloperSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
