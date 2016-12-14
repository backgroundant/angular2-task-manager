import { Injectable } from '@angular/core';

import { Task } from './task.model';
import { TASKS } from './task-data';

@Injectable ()

export class TasksService {
    getTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    } 
    
    getTask(id:number): Promise<Task> {
        return this.getTasks().then(tasks => tasks.find(task => task.id == id));
    }
}
