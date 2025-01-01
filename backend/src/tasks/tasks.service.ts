// import { Injectable } from '@nestjs/common';
// import { Task, TaskStatus } from './task.model';
// import { v4 as uuid } from 'uuid';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { TasksSearchFilterDto } from './dto/tasks-search-filter.dto';
// import { NotFoundException } from '@nestjs/common/exceptions';
// // import { stat } from 'fs';

// @Injectable()
// export class TasksService {
//   private tasks : Task[]  = []
  
//   getAllTasks() : Task[] {
//     return this.tasks;
//   }

//   getTasksWithFilters(filterDTO : TasksSearchFilterDto) : Task[] {
//     const {status, search} = filterDTO
//     let tasks = this.getAllTasks()

//     if(status) {
//       tasks = tasks.filter((task) => task.status === status)
//     }

//     if(search) {
//       tasks = tasks.filter((task)=> task.title.includes(search) || task.description.includes(search))
//     }

//     return tasks

//   }

//   getTaskById(id: string) : Task {

//     const found = this.tasks.find((task) => task.id == id)

//     if(!found) {
//       throw new NotFoundException()
//     }

//     return found
//   }

//   deleteTask(id: string) : void {
//     const found = this.getTaskById(id)
//     this.tasks = this.tasks.filter((task)=> task.id !== found.id);
//   }

//   updateTaskStatus(id : string, status : TaskStatus) : Task {
//     const task = this.getTaskById(id);
//     task.status = status;
//     return task;
//   }

  

//   createTask(createTaskDto: CreateTaskDto) : Task {
//     const { title, description } = createTaskDto;
//     const task : Task = {
//       id : uuid(),
//       title,
//       description,
//       status : TaskStatus.OPEN
//     }

//     this.tasks.push(task);

//     return task;
//   }
// }




import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.shema';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksSearchFilterDto } from './dto/tasks-search-filter.dto';
import { TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTasksWithFilters(filterDTO: TasksSearchFilterDto): Promise<Task[]> {
    const { status, search } = filterDTO;
    const query = {};

    if (status) {
      query['status'] = status;
    }

    if (search) {
      query['$or'] = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    return this.taskModel.find(query).exec();
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = new this.taskModel({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    return task.save();
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.taskModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
    return task;
  }
}
