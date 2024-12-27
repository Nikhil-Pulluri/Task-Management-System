import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksSearchFilterDto } from './dto/tasks-search-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}
  
  @Get()
  getTasks(@Query() filterDTO : TasksSearchFilterDto) : Task[] {

    if(Object.keys(filterDTO).length) {
      // return the filtered tasks
      return this.taskService.getTasksWithFilters(filterDTO);
    }

    else {
      return this.taskService.getAllTasks();
    }
    
  }

  @Get('/:id')
  getTaskById(@Param('id') id:string) : Task {
    return this.taskService.getTaskById(id)
  }

  @Delete('/:id')
  deleteTask(@Param('id') id:string) :void {
    this.taskService.deleteTask(id);
  }

  // @Post('/:id')
  // updateTaskStatus(@Param('id') id:string) : Task {
  //   return this.taskService.updateTaskStatus(id);
  // }

  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id:string, @Body() updateTaskStatus : UpdateTaskStatusDTO) : Task {
    const {status} = updateTaskStatus
    return this.taskService.updateTaskStatus(id, status)
  }

  @Post()
  createTask(@Body() createTaskDto : CreateTaskDto)  {
    return this.taskService.createTask(createTaskDto);
  }


}
