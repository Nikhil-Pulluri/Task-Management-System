// import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
// import { TasksService } from './tasks.service';
// import { Task, TaskStatus } from './task.model';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { TasksSearchFilterDto } from './dto/tasks-search-filter.dto';
// import { UpdateTaskStatusDTO } from './dto/update-task.dto';

// @Controller('tasks')
// export class TasksController {

//   constructor(private taskService: TasksService) {}
  
//   @Get()
//   getTasks(@Query() filterDTO : TasksSearchFilterDto) : Task[] {

//     if(Object.keys(filterDTO).length) {
//       // return the filtered tasks
//       return this.taskService.getTasksWithFilters(filterDTO);
//     }

//     else {
//       return this.taskService.getAllTasks();
//     }
    
//   }

//   @Get('/:id')
//   getTaskById(@Param('id') id:string) : Task {
//     return this.taskService.getTaskById(id)
//   }

//   @Delete('/:id')
//   deleteTask(@Param('id') id:string) :void {
//     this.taskService.deleteTask(id);
//   }

//   // @Post('/:id')
//   // updateTaskStatus(@Param('id') id:string) : Task {
//   //   return this.taskService.updateTaskStatus(id);
//   // }

//   @Patch('/:id/status')
//   updateTaskStatus(@Param('id') id:string, @Body() updateTaskStatus : UpdateTaskStatusDTO) : Task {
//     const {status} = updateTaskStatus
//     return this.taskService.updateTaskStatus(id, status)
//   }

//   @Post()
//   createTask(@Body() createTaskDto : CreateTaskDto)  {
//     return this.taskService.createTask(createTaskDto);
//   }


// }





import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.shema'; // Use the Task schema (MongoDB model)
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksSearchFilterDto } from './dto/tasks-search-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getTasks(@Query() filterDTO: TasksSearchFilterDto): Promise<Task[]> {
    if (Object.keys(filterDTO).length) {
      // Return filtered tasks
      return this.taskService.getTasksWithFilters(filterDTO);
    } else {
      // Return all tasks
      return this.taskService.getAllTasks();
    }
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatus: UpdateTaskStatusDTO,
  ): Promise<Task> {
    const { status } = updateTaskStatus;
    return this.taskService.updateTaskStatus(id, status);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }
}
