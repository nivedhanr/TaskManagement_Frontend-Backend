import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewemployeetask',
  templateUrl: './viewemployeetask.component.html',
  styleUrls: ['./viewemployeetask.component.css']
})
export class ViewemployeetaskComponent implements OnInit {

 
  tasks: any[] = [];
  editMode = false;
  trackToUpdate: string = ''; 
  registrationForm: FormGroup; 

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      empcode: ['', Validators.required], 
      emptask: ['', Validators.required],
      description: ['', Validators.required],
      track: ['', Validators.required],
    });
  }







ngOnInit() {
  this.loadTasks();
}

loadTasks() {
  const empCodeString = sessionStorage.getItem('empinfo');
  console.log(empCodeString);
  if (empCodeString) {
    const empCode = Number(empCodeString);
    this.apiService.gettaskByEmp(empCode).subscribe((data) => {
      this.tasks = data; 
      console.log(this.tasks);
    });
  }
}

updateTrackForTask(taskId: number) {
  const updatedTrack = this.registrationForm.get('track')?.value;

  if (updatedTrack !== null && updatedTrack !== undefined) {
    this.apiService.updateTaskTrack(taskId, updatedTrack).subscribe(
      (response: any) => {
        console.log('Track updated successfully', response);
        this.editMode = false;
        this.loadTasks(); 
      },
      (error: any) => {
        console.error('Error updating track:', error);

      }
    );
  } else {
    console.error('Track is null or undefined.');
    
  }
}


cancelEdit() {
  this.loadTasks(); 
  this.editMode = false;
}

}
