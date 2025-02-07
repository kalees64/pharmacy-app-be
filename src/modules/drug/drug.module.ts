import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Drug, DrugSchema } from './schema/drug.schema';

@Module({
  providers: [DrugService],
  controllers: [DrugController],
  imports: [
    MongooseModule.forFeature([{ name: Drug.name, schema: DrugSchema }]),
  ],
})
export class DrugModule {}
