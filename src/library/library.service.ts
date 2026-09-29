import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/book.schema.js';
import { Book } from './schemas/library.schema.js';
import { Model } from 'mongoose';
@Injectable()
export class LibraryService {
   constructor(
    @InjectModel(Book.name) private bookModel:Model<Book>,
        @InjectModel(Library.name) private libarayModel:Model<Library>
    
   ) {}
   async createLibrary():Promise<Library>{
    const book1=await this.bookModel.create({
        title:'JS ka champion',
        author:"Prkash"
    })
     const book2=await this.bookModel.create({
        title:'Node ka champion',
        author:"Rupam"
    })
const library=new this.libarayModel({
    name:'central Library',
    books:[book1._id,book2._id]
})
return library.save()

   }
   async  getLibraries():Promise<Library[]>{
    return this.libarayModel.find().populate('books')
        
   
   }

}
