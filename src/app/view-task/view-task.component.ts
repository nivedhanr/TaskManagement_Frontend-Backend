import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  task: any=[];
  
  
  constructor(private apiService: ApiService) {
    apiService.getAlltask().subscribe(
      (response)=>
      {
        this.task=response;
      }
    );
  }
}
