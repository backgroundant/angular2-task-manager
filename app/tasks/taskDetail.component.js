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
var router_1 = require('@angular/router');
var tasks_service_1 = require('./../shared/tasks.service');
var TaskDetailComponent = (function () {
    function TaskDetailComponent(tasksService, route) {
        this.tasksService = tasksService;
        this.route = route;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // runs a loop that is given to us by the ActivatedRoute class that was imported
        this.route.params.forEach(function (params) {
            var id = +params['id']; // access the url by creating a new variable and 
            _this.tasksService.getTask(id).then(function (task) { return _this.task = task; });
        });
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            selector: 'task-detail',
            templateUrl: '/../app/tasks/taskDetail.html'
        }), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService, router_1.ActivatedRoute])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=taskDetail.component.js.map