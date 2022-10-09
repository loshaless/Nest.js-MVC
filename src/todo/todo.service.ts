import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  todos: { task: string; isComplete: boolean }[] = [
    { task: 'Create app', isComplete: false },
    { task: 'Upload Video', isComplete: true },
  ];

  getAll() {
    return this.todos;
  }

  add(task: string) {
    const newTask = task ? task : 'nothing';

    this.todos.push({
      task: newTask,
      isComplete: false,
    });
  }

  remove(index: number) {
    this.todos.splice(index, 1);
  }

  reverseComplete(index: number) {
    this.todos[index].isComplete = !this.todos[index].isComplete;
  }
}
