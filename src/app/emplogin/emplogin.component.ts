import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {
  empcode: string = '';
  password: string = '';

  constructor(private router: Router, private apiService: ApiService) {}


  login = () => {
    if (this.empcode.trim() === '' || this.password.trim() === '') {
      alert("Please fill in both empcode and password fields.");
      return;
    }
  
    const emp = { empcode: this.empcode, password: this.password };
    console.log('User Data:', emp);
    this.apiService.empLogin(emp).subscribe((response: any) => {
      console.log('Response:', response);
      if (response.message === "user login success") {
        alert("Valid credential");
        const userId = response.userid; 
        console.log(userId);
        sessionStorage.setItem("userinfo", userId);
        const empCode = response.empcode; 
        console.log(empCode);
        sessionStorage.setItem("empinfo", empCode);
        this.router.navigate(['viewemp']);
      } else {
        alert("Invalid credential");
      }
    });
  }

}
