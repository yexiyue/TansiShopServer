import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';

@Injectable()
export class ClotheService {
  constructor(private prisma:PrismaService){}
  async create(createClotheDto: CreateClotheDto) {
    try {
      return await this.prisma.clothe.create({
        data:{
          category:createClotheDto.category,
          name:createClotheDto.name,
          articleNo:createClotheDto.articleNo,
          price:createClotheDto.price,
          frontImg:createClotheDto.frontImg,
          backImg:createClotheDto.backImg,
          banners:{
            createMany:{
              data:createClotheDto.banners.map(item=>({
                imgUrl:item
              }))
            }
          },
          colorCount:{
            createMany:{
              data:createClotheDto.colorCount.map(item=>({
                color:item.color,
                count:+item.count
              }))
            }
          },
          fabric:createClotheDto.fabric,
        }
      });
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async findAll(take:number,skip:number,publish:boolean,order:boolean) {
    try {
      return await this.prisma.clothe.findMany({
        where:{
          publish,
        },
        include:{
          banners:{
            select:{
              imgUrl:true
            }
          },
          colorCount:true
        },
        take,
        skip,
        orderBy:{
          createTime:order ?'asc':'desc'
        }
      })
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async findAllList(take:number,skip:number,publish:boolean,order:boolean,category:string) {
    try {
      return await this.prisma.clothe.findMany({
        where:{
          publish,
          category
        },
        include:{
          banners:{
            select:{
              imgUrl:true
            }
          },
          colorCount:true
        },
        take,
        skip,
        orderBy:{
          createTime:order ?'asc':'desc'
        }
      })
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.clothe.findFirst({
        where:{
          id
        },
        include:{
          banners:{
            select:{
              imgUrl:true
            }
          },
          colorCount:true
        },
      })
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async update(id: number, updateClotheDto: UpdateClotheDto) {
    try {
      await this.prisma.banner.deleteMany({
        where:{
          clotheId:id
        }
      })
      await this.prisma.colorCount.deleteMany({
        where:{
          clotheId:id
        }
      })
      return await this.prisma.clothe.update({
        where:{
          id
        },
        data:{
          category:updateClotheDto.category,
          name:updateClotheDto.name,
          articleNo:updateClotheDto.articleNo,
          price:updateClotheDto.price,
          frontImg:updateClotheDto.frontImg,
          backImg:updateClotheDto.backImg,
          banners:{
            createMany:{
              data:updateClotheDto.banners.map(item=>({
                imgUrl:item
              }))
            }
          },
          colorCount:{
            createMany:{
              data:updateClotheDto.colorCount.map(item=>({
                color:item.color,
                count:+item.count
              }))
            }
          },
          fabric:updateClotheDto.fabric,
          publish:updateClotheDto.publish
        }
      })
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.$transaction([
        this.prisma.banner.deleteMany({
          where:{
            clotheId:id
          }
        }),
        this.prisma.colorCount.deleteMany({
          where:{
            clotheId:id
          }
        }),
        this.prisma.clothe.delete({
          where:{
            id
          }
        })
      ])
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async count(publish:boolean){
    try {
      return await this.prisma.clothe.count(
        {
          where:{
            publish
          }
        }
      )
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async countByCategory(publish:boolean,category:string){
    try {
      return await this.prisma.clothe.count(
        {
          where:{
            publish,
            category
          }
        }
      )
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  async patchPublish(id:number,publish:boolean){
    try {
      return await this.prisma.clothe.update({
        where:{
          id
        },
        data:{
          publish
        }
      })
      
    } catch (error) {
      throw new HttpException(`prisma error ${error.toString()}`,HttpStatus.SERVICE_UNAVAILABLE)
    }
  }
}
