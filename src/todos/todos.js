import {inject} from 'aurelia-framework';
import {TodoService} from './todoService';

@inject(TodoService)
export class Todos {
  constructor(TodoService) {
    this.Todos = TodoService;
  }

  activate() {
    this.Todos.getTodos()
      .then(todos => this.todos = todos);
  }

  update() {
    this.Todos.updateTodos(this.todos)
      .then(data => {
        console.log(data);
      });
  }
}
