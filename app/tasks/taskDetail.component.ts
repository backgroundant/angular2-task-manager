import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { OnInit } from '@angular/core';

import { Task } from './../shared/task.model';
import { TasksService} from './../shared/tasks.service';

@Component ({
    selector: 'task-detail',
    templateUrl: '/../app/tasks/taskDetail.html'
})

export class TaskDetailComponent implements OnInit {
    task: Task;
    
    constructor(
        private tasksService: TasksService,
        private route: ActivatedRoute,
    ) {}
    
   ngOnInit(): void {
        // runs a loop that is given to us by the ActivatedRoute class that was imported
        this.route.params.forEach((params: Params) => {
        let id = +params['id'];  // access the url by creating a new variable and 
        this.tasksService.getTask(id).then(task => this.task = task);
    });
    
}

}