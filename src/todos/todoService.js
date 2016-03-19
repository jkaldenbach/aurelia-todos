import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';

@inject(HttpClient)
export class TodoService {
  constructor(http) {
    this.http = http;
  }

  getTodos() {
    return this.http.fetch('http://localhost:3000/data/todos.json')
      .then(response => response.json());
  }

  updateTodos(todos) {
    return this.http.fetch('http://localhost:3000/data/todos.json', {
      method: 'post',
      body: todos
    }).then(response => response.json());
  }
}
