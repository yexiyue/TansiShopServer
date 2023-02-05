import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  ParseIntPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Clothe, ColorCount } from '@prisma/client';
import { IsPublic } from 'src/auth/auth.decorator';
import { ClotheService } from './clothe.service';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';

@Controller('clothe')
export class ClotheController {
  constructor(private readonly clotheService: ClotheService) {}

  @Post()
  create(@Body() createClotheDto: CreateClotheDto) {
    return this.clotheService.create(createClotheDto);
  }

  @IsPublic()
  @Get('/count')
  getCount(@Query('publish', ParseBoolPipe) publish: boolean) {
    return this.clotheService.count(publish);
  }

  @IsPublic()
  @Get('/list')
  findAllList(
    @Query('take', ParseIntPipe) take: number,
    @Query('skip', ParseIntPipe) skip: number,
    @Query('publish', ParseBoolPipe) publish: boolean,
    @Query('category') category: string,
    @Query('order', ParseBoolPipe) order: boolean,
    
  ) {
    console.log('=========>2222222222')
    return this.clotheService.findAllList(take, skip, publish, order, category);
  }

  @IsPublic()
  @Get('/list/count')
  getCountList(
    @Query('publish', ParseBoolPipe) publish: boolean,
    @Query('category') category: string,
  ) {
    console.log('=========>11111111111111')
    return this.clotheService.countByCategory(publish, category);
  }

  @IsPublic()
  @Get()
  findAll(
    @Query('take', ParseIntPipe) take: number,
    @Query('skip', ParseIntPipe) skip: number,
    @Query('publish', ParseBoolPipe) publish: boolean,
    @Query('order', ParseBoolPipe) order: boolean,
  ) {
    return this.clotheService.findAll(take, skip, publish, order);
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clotheService.findOne(+id);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClotheDto: UpdateClotheDto) {
    return this.clotheService.update(+id, updateClotheDto);
  }

  @Patch('/publish/:id')
  updatePublish(
    @Param('id', ParseIntPipe) id: number,
    @Body('publish') publish: boolean,
  ) {
    return this.clotheService.patchPublish(id, publish);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clotheService.remove(+id);
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: any) {
    return `/image/${file.filename}`;
  }

  @IsPublic()
  @Post('/favorite')
  getFavorite(@Body('list') list:number[]){
    return Promise.all(list.map(id=>this.findOne(id+'')))
  }
}

type Clothes=Clothe & {
  banners: {
      imgUrl: string;
  }[];
  colorCount: ColorCount[];
}