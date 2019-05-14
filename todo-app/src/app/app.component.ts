import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[];
  title = 'todo-app';

  addTodo(value){
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
}
