import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(5)
      ])]
    })
    this.todos.push(new Todo(1,"Passear com o cachorro", false));
    this.todos.push(new Todo(2,"Ir ao Supermercado", false));
    this.todos.push(new Todo(3,"Cortar o cabelo", false));
    this.todos.push(new Todo(4,new Date().toDateString(), false));
    this.todos.push(new Todo(5,"Ir a Academia", true));
  }

  add(){
    // this.form.value => { title: 'Titulo'}
    const title = this.form.controls['title'].value;
    const id = this.todos.length +1;
    this.todos.push(new Todo(id, title, false));
  }

  alterarTexto(): void {
    this.title = "Texto Alterado";
  }

  remove(todo: Todo){
    // Achar o index do todo passado como parametro
    const index = this.todos.indexOf(todo);

    // Se o index existir na lista
    if(index !== -1){
      // Vai retirar esse todo da lista
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
