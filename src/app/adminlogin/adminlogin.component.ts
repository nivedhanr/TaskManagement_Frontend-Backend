import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""
  
 constructor(private router:Router,private apiService:ApiService){}
 adminLogin=()=>
  {
    

    if (this.username=="admin" && this.password=="12345") {
      
      alert("valid credential")
      
      
      this.router.navigate(['/viewallemp']);
    } else {
      alert("invalid credential")
      
    }
  }
}
