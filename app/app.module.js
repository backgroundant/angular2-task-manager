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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var tasks_service_1 = require('./shared/tasks.service');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./welcome/welcome.component');
var tasks_component_1 = require('./tasks/tasks.component');
var taskDetail_component_1 = require('./tasks/taskDetail.component');
var newTask_component_1 = require('./tasks/newTask.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/welcome',
                        pathMatch: 'full'
                    },
                    {
                        path: 'welcome',
                        component: welcome_component_1.WelcomeComponent
                    },
                    {
                        path: 'taskList',
                        component: tasks_component_1.TasksComponent
                    },
                    {
                        path: 'task/:id',
                        component: taskDetail_component_1.TaskDetailComponent
                    },
                    {
                        path: 'newTask',
                        component: newTask_component_1.NewTaskComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                tasks_component_1.TasksComponent,
                taskDetail_component_1.TaskDetailComponent,
                newTask_component_1.NewTaskComponent
            ],
            providers: [tasks_service_1.TasksService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map