import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode = 'list';
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
    this.load();
  }

  add(){
    // this.form.value => { title: 'Titulo'}
    const title = this.form.controls['title'].value;
    const id = this.todos.length +1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  remove(todo: Todo){
    // Achar o index do todo passado como parametro
    const index = this.todos.indexOf(todo);

    // Se o index existir na lista
    if(index !== -1){
      // Vai retirar esse todo da lista
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo){
    todo.done = true
    this.save();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load(){
    const data = localStorage.getItem('todos');
    if(data){
      const items = JSON.parse(data);
      this.todos = items;
    }
  }

  changeMode(mode: string){
    this.mode=mode;
  }
}
