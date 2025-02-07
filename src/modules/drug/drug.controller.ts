import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DrugService } from './drug.service';
import { DRUG } from './dto/drug.dto';

@Controller('drugs')
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  @Get()
  async getDrugs() {
    return await this.drugService.getDrugs();
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    return this.drugService.getDrug(id);
  }

  @Post()
  async addTask(@Body() task: DRUG) {
    return this.drugService.addDrug(task);
  }

  @Patch('/:id')
  async updateTask(@Param('id') id: string, @Body() task: DRUG) {
    return this.drugService.updateDrug(id, task);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string) {
    return this.drugService.deleteDrug(id);
  }
}
