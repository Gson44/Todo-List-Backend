import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>
  ){}

  create(activity: Partial<Activity>): Promise<Activity> {
    return this.activityRepository.save(activity);
  }

  findAll(): Promise<Activity[]> {
    return this.activityRepository.find();
  }

   findOne(id: number):Promise<Activity> {
    return this.activityRepository.findOneBy({id});
  }

  async update(id: number, activity: Partial<Activity>):Promise<Activity> {
    await this.activityRepository.update(id, activity)
    return this.activityRepository.findOneBy({id});
  }

  async remove(id: number):Promise<void> {
     await this.activityRepository.delete({id});
  }
}
