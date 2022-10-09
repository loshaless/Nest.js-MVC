import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Redirect,
  Render,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @Render('todo')
  index() {
    return {
      list: this.todoService.getAll(),
    };
  }

  @Post('add')
  @Redirect('/todo')
  addTask(@Body('task') task: string) {
    this.todoService.add(task);
  }

  @Get('remove')
  @Redirect('/todo')
  remove(@Query('index') indexTask: number) {
    this.todoService.remove(+indexTask);
  }

  @Get('reverse-complete')
  @Redirect('/todo')
  reverseComplete(@Query('index') indexTask: string) {
    this.todoService.reverseComplete(+indexTask);
  }
}
