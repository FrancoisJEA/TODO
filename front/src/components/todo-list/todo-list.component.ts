import { task } from './../../models/task';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  newTask(test:string) {
    let date = new Date();
    //let dateTime  = new DatePipe(date.toDateString())
    let _task = new task(test, test,date , test)
  }

}
