"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_data_1 = require('./task-data');
var TasksService = (function () {
    function TasksService() {
    }
    TasksService.prototype.getTasks = function () {
        return Promise.resolve(task_data_1.TASKS);
    };
    TasksService.prototype.getTask = function (id) {
        return this.getTasks().then(function (tasks) { return tasks.find(function (task) { return task.id == id; }); });
    };
    TasksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map