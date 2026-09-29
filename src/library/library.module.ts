import { Module } from '@nestjs/common';
import { LibraryService } from './library.service.js';
import { LibraryController } from './library.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schemas/book.schema.js';
import { BookSchema,Book } from './schemas/library.schema.js';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Library.name,schema:LibrarySchema},
      {name:Book.name,schema:BookSchema}
    ])
  ],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
