import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { Tasks } from './tasks';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Task, TaskSchema} from './task.shema'
@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [Tasks, TasksService]
})
export class TasksModule {}
