import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: any[] = [];
  public title: String = "Minhas tarefas";

  constructor() {
    this.todos.push('Passear com o cachorro');
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
