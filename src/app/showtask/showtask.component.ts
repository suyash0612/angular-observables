import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../services/task.services';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {
  tasks : string[] = ['task1','task2','task3'];

  servicetask : TaskService = inject(TaskService);

  ngOnInit(){
    this.servicetask.createevent.subscribe((value)=>{
      this.tasks.push(value);
    })
  }
}
