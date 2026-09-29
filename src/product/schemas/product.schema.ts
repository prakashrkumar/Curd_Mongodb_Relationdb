import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Tag } from "./tag.schema.js";
@Schema()
export class Product extends Document{
  @Prop()
  title:String
  @Prop({type:[Tag]})
  tags:Tag[]
}

export const ProductSchema=SchemaFactory.createForClass(Product)