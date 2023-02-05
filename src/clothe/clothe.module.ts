import { extname, resolve } from 'path';
import { Module } from '@nestjs/common';
import { ClotheService } from './clothe.service';
import { ClotheController } from './clothe.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports:[MulterModule.register({
    storage:diskStorage({
      destination:resolve(__dirname,'../../public/image'),
      filename:(_,file,callback)=>{
        return callback(null,`${Date.now()}${extname(file.originalname)}`)
      }
    })
  })],
  controllers: [ClotheController],
  providers: [ClotheService]
})
export class ClotheModule {}
