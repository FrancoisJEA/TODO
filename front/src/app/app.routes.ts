import { Routes } from '@angular/router';
import { CalendarPageComponent } from '../pages/calendar-page/calendar-page.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

export const routes: Routes = [
  {path: 'Home', component: HomePageComponent},
  {path: 'Calendar', component: CalendarPageComponent},
  {path: 'todo', component: TodoListComponent},
  {path: '**', component: PageNotFoundComponent}
];
