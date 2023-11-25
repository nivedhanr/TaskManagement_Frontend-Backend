import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-employee',
  templateUrl: './viewall-employee.component.html',
  styleUrls: ['./viewall-employee.component.css']
})
export class ViewallEmployeeComponent {
  userDetails: any=[];
  imageDataUrl: string=''; 
  
  image: File | null = null;
  constructor(private apiService: ApiService) {
    apiService.getAllemp().subscribe(
      (response)=>
      {
        this.userDetails=response;
      }
    );
  }

}
