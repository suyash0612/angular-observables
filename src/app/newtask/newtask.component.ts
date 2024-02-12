import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.services';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent {
  myTask : string = '';
  taskservice : TaskService = inject(TaskService);
  onHitSearchBtn(){
    console.log(this.myTask);
    this.taskservice.onGetServiceTask(this.myTask);
  }
}
