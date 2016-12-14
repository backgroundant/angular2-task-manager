import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { Task } from './../shared/task.model';
import { TasksService } from './../shared/tasks.service';

@Component ({
    selector:'tasks',
    templateUrl:'app/tasks/taskList.html'
})

export class TasksComponent implements OnInit {
    tasks: Task[];
    
    constructor(private tasksService:TasksService) {}
    
    getTasks():void {
        this.tasksService.getTasks().then(tasks => this.tasks = tasks);
    }
    
    ngOnInit(): void {
        this.getTasks();
    }
    
}