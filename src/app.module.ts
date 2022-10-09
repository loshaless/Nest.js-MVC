import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [HelloModule, TodoModule], //  it’ll be in charge of importing the other modules. You should ALWAYS have a main module that is called within the main.ts file.
  controllers: [], // Each time you create a controller, it should be declared in the corresponding controllers array.
  providers: [], // Mainly services but it can be any class that is having the @Injectable decorator.
})
export class AppModule {}
