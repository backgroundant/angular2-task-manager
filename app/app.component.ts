import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params }   from '@angular/router';

import { TasksService}  from './shared/tasks.service';
import { Task } from './shared/task.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent {
   @Input()
  task: Task;
  constructor(
  private tasksService: TasksService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.tasksService.getTask(id).then(task => this.task = task);
    });
}
      goBack(): void {
         this.location.back();
    }
}
