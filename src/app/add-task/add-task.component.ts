import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      empcode: ['', [Validators.required]],
      emptask: ['', [Validators.required]],
      description: ['', [Validators.required]],
      track: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const taskData = this.registrationForm.value;

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.sendFormDataToBackend(taskData, headers);
    }
  }

  sendFormDataToBackend(taskData: any, headers: HttpHeaders) {
    this.http.post('http://localhost:8080/api/employee/createTask', taskData, { headers })
      .subscribe(
        (response: any) => {
          if (response.includes("Task added successfully")) {
            alert("Task added successfully");
            this.router.navigate(['/viewalltask']);
          } else {
            alert("Unexpected response: " + response);
          }
        },
        (error) => {
          if (error.status === 500) {
            alert("Error registering user. Please try again later.");
          } else {
            alert("Task added successfully");
          }
        }
      );
  }
}
