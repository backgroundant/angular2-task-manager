import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TasksService}  from './shared/tasks.service';

import { AppComponent }   from './app.component';
import { WelcomeComponent}  from './welcome/welcome.component';
import { TasksComponent }   from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/taskDetail.component';
import { NewTaskComponent } from './tasks/newTask.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          {
              path: '',
              redirectTo: '/welcome',
              pathMatch: 'full'
          },
          {
              path: 'welcome',
              component: WelcomeComponent
          },
          {
              path: 'taskList',
              component: TasksComponent
          },
          {
              path: 'task/:id',  
              component: TaskDetailComponent
          },
          {
              path: 'newTask',
              component: NewTaskComponent
          }
      ])
  ],
  declarations: [
      AppComponent,
      WelcomeComponent,
      TasksComponent,
      TaskDetailComponent,
      NewTaskComponent
  ],
  providers:     [TasksService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
