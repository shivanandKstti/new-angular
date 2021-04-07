import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn cpp',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '222',
        title: 'Learn React',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '333',
        title: 'Learn angular',
        isComplete: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo){
    this.todos.map( singleTodo => {
      if (singleTodo.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const todoIndex = this.todos.findIndex(
      (currentbj) => currentbj.id === todo.id
    );
    this.todos.splice(todoIndex, 1);
  }
}
