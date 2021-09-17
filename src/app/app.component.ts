import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";

  constructor() {
    this.todos.push(new Todo());
    this.todos.push('Ir ao supermercado');
    this.todos.push('Cortar o cabelo');
    this.todos.push(1999);
    this.todos.push(new Date());
    this.todos.push({message: 'teste'})
  }

  alterarTexto(): void {
    this.title = "Texto Alterado";
  }
}
