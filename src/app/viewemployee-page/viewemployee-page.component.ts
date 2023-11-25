import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee-page',
  templateUrl: './viewemployee-page.component.html',
  styleUrls: ['./viewemployee-page.component.css']
})
export class ViewemployeePageComponent {
 

  userDetails: any;
imageDataUrl: string = '';

constructor(private apiService: ApiService) {}

ngOnInit() {
  const empCode = sessionStorage.getItem('empinfo');
  if (empCode && !isNaN(Number(empCode))) {
    this.apiService.getEmpDetails(Number(empCode)).subscribe((data) => {
      this.userDetails = data;
      
      if (this.userDetails && this.userDetails.image) {
        console.log("Image Data Length:", this.userDetails.image ? this.userDetails.image.length : 'Image data is empty or undefined');
        this.imageDataUrl = 'data:image/jpeg;base64,' + this.userDetails.image;
      }

      console.log("userdetails", this.userDetails);
    },
    (error) => {
      console.error('Error fetching user details:', error);
      
    }
  );
}  else {
    console.error('Invalid or missing employee code');
  }
}

arrayBufferToBase64(buffer: any) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}


}
