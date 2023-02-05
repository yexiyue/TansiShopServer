
import { IsString } from "class-validator";

export class CreateClotheDto {
    @IsString()
    name:string

    @IsString()
    articleNo:string

    frontImg?:string
    backImg?:string
    fabric?:string
    publish?:boolean
    banners:string[]
    price:number
    
    colorCount:{color:string,count:number}[]
    
    @IsString()
    category:string
}
