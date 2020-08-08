import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<Todo[]>;
  bannerImages: any[];
  singleTodo: Observable<Todo>;
  todoForm: FormGroup;

    constructor( private todoService: TodoService,
      private formBuilder: FormBuilder) {
  
      this.todoForm = this.formBuilder.group({
        'todo': ['', Validators.required]
      });
    }

    ngOnInit() {
      this.todos = this.todoService.todos;
      this.singleTodo = this.todoService.todos.pipe(
        map(todos => todos.find(item => item.id === '1'))
      );
  
      let data= this.todoService.loadBanner();
      console.log(data);
      this.todoService.loadAll();
      this.todoService.load('1');
    }
  
    onSubmit() {
      this.todoService.create({ value: this.todoForm.controls.todo.value });
    }
  
    deleteTodo(todoId: number) {
      this.todoService.remove(todoId);
    }
}
