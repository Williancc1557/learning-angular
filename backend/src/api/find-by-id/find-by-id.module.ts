import { Module } from '@nestjs/common';
import { FindByIdController } from './find-by-id.controller';

@Module({
  controllers: [FindByIdController]
})
export class FindByIdModule {}
