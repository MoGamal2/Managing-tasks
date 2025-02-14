import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TasksComponent],
  providers: [],
})
export class TasksModule {}
