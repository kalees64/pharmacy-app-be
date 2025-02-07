import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drug } from './schema/drug.schema';
import { DRUG } from './dto/drug.dto';

@Injectable()
export class DrugService {
  constructor(@InjectModel(Drug.name) private drugModel: Model<Drug>) {}

  async getDrugs() {
    const drugs = await this.drugModel.find().select('-__v');
    return drugs;
  }

  async getDrug(id: string) {
    const task = await this.drugModel.findById(id).select('-__v');

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }

  async addDrug(task: DRUG) {
    const addTask = await this.drugModel.insertMany([task]);
    const newTask = addTask[0];
    return newTask;
  }

  async updateDrug(id: string, task: DRUG) {
    if (Object.keys(task).length === 0) {
      throw new BadRequestException();
    }

    const findTask = this.getDrug(id);

    const updateTask = await this.drugModel.findByIdAndUpdate(id, task, {
      new: true,
    });
    return updateTask;
  }

  async deleteDrug(id: string) {
    const findTask = this.getDrug(id);
    const deletTask = await this.drugModel.findByIdAndDelete(id);
    return findTask;
  }
}
