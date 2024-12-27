import { TaskStatus } from "../task.model";
import { IsEnum, IsString, IsOptional } from "class-validator";
export class TasksSearchFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsOptional()
    @IsString()
    search: string;
}
