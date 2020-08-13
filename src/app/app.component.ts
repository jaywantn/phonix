import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
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

    constructor( private todoService: TodoService, private formBuilder: FormBuilder, private router: Router) {
      this.todoForm = this.formBuilder.group({
        todo: ['', Validators.required]
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

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (document.getElementById('customscript') != null) {
            document.getElementById('customscript').remove();
          }
          const node = document.createElement('script');
          node.src = 'assets/js/customscript.js';
          node.type = 'text/javascript';
          node.async = false;
          node.id = 'customscript';
          node.charset = 'utf-8';
          document.getElementsByTagName('body')[0].appendChild(node);
        }
      });
    }

    onSubmit() {
      this.todoService.create({ value: this.todoForm.controls.todo.value });
    }

    deleteTodo(todoId: number) {
      this.todoService.remove(todoId);
    }
}
