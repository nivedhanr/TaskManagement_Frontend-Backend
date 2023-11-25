import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeenavbar',
  templateUrl: './employeenavbar.component.html',
  styleUrls: ['./employeenavbar.component.css']
})
export class EmployeenavbarComponent {
  constructor(private router: Router) {}
  logout(){
    this.router.navigate(['/emplogin']);
  }
}
