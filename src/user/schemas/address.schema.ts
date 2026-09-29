import { Prop,Schema } from "@nestjs/mongoose";
import { scheduler } from "node:timers/promises";

@Schema()
export class Address{
    @Prop()
    street:string

    @Prop()
    city:string
}