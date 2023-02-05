import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaPromise } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma:PrismaService){}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.prisma.category.create({
        data:{
          value:createCategoryDto.value
        }
      });
    } catch (error) {
      throw new HttpException(error,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async findAll() {
    try {
      return await this.prisma.category.findMany()
    } catch (error) {
      throw new HttpException(error,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.category.findFirst({
        where:{
          id,
        }
      })
    } catch (error) {
      throw new HttpException(error,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.prisma.category.update({
        where:{
          id,
        },
        data:{
          value:updateCategoryDto.value
        }
      })
    } catch (error) {
      throw new HttpException(error,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async remove(id: number) {
    try {
      const value=await this.findOne(id)
      const clothes=await this.prisma.clothe.findMany({
        where:{
          category:value.value
        }
      })
      const ids=clothes.map(item=>item.id)

      const operation=[]

      ids.forEach(item=>{

        operation.push(...[
          this.prisma.banner.deleteMany({
            where:{
              clotheId:item
            }
          }),
          this.prisma.colorCount.deleteMany({
            where:{
              clotheId:item
            }
          }),
          this.prisma.clothe.delete({
            where:{
              id:item
            }
          })
        ])
      })

      return await this.prisma.$transaction([

        ...operation,
        this.prisma.category.delete({
          where:{
            id,
          },
        })
      ])
    } catch (error) {
      throw new HttpException(error,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }
}
