import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Todo {
  id?: any;
  createdAt?: number;
  value: string;
}

@Injectable()
export class TodoService {
  private _todos = new BehaviorSubject<Todo[]>([]);
  private baseUrl = 'https://56e05c3213da80110013eba3.mockapi.io/api';
  private dataStore: { todos: Todo[] } = { todos: [] };
  readonly todos = this._todos.asObservable();
  private propertyUrl = 'http://localhost:4000/characters';
  cars = [];
  bannerImages = [];
  constructor(private http: HttpClient) {
     // this.loadBanner();
      // this.getAll();
   }
   getAll(): Observable<any[]>{

    console.log(`${this.propertyUrl}/api/store.php`);
    return this.http.get(`${this.propertyUrl}/api/store.php`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
    }),
    catchError(this.handleError));
  }
    handleError(handleError: any): import("rxjs").OperatorFunction<any[], any> {
        throw new Error("Method not implemented.");
    }
  loadAll() {
    this.http.get<Todo[]>(`${this.baseUrl}/todos`).subscribe(data => {
      this.dataStore.todos = data;
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todos.'));
  }

  loadBanner() {
    this.http.get(`${this.propertyUrl}`).subscribe(data => {

      //  console.log(data);
      return data;
    }, error => console.log('Could not load todos.'));
  }

  load(id: number | string) {
    this.http.get<Todo>(`${this.baseUrl}/todos/${id}`).subscribe(data => {
      let notFound = true;

      this.dataStore.todos.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.todos[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.todos.push(data);
      }

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todo.'));
  }

  create(todo: Todo) {
    this.http.post<Todo>(`${this.baseUrl}/todos`, JSON.stringify(todo)).subscribe(data => {
      this.dataStore.todos.push(data);
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not create todo.'));
  }

  update(todo: Todo) {
    this.http.put<Todo>(`${this.baseUrl}/todos/${todo.id}`, JSON.stringify(todo)).subscribe(data => {
      this.dataStore.todos.forEach((t, i) => {
        if (t.id === data.id) { this.dataStore.todos[i] = data; }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not update todo.'));
  }

  remove(todoId: number) {
    this.http.delete(`${this.baseUrl}/todos/${todoId}`).subscribe(response => {
      this.dataStore.todos.forEach((t, i) => {
        if (t.id === todoId) { this.dataStore.todos.splice(i, 1); }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not delete todo.'));
  }
}
