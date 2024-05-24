import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-calendar',
//   standalone: true,
//   imports: [],
//   templateUrl: './calendar.component.html',
//   styleUrl: './calendar.component.css'
// })
// export class CalendarComponent {

// }

import {Component} from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-calendar',
  styleUrl: './calendar.component.css',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [MatGridListModule],
})
export class CalendarComponent {}
