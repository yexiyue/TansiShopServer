import { SetMetadata } from '@nestjs/common';
export const IS_PUBLIC=Symbol()
export const IsPublic = () => SetMetadata(IS_PUBLIC,true);
