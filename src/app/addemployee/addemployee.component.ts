import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  registrationForm: FormGroup;
 
  image: File | null = null;

  


  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
    this.registrationForm = this.formBuilder.group({
      empcode: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phn: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      address: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.gmailValidator()]],
      username: ['', [Validators.required]],
      image: [null],
      password: ['', [Validators.required, Validators.minLength(6)]],
      con_password: ['', [Validators.required, Validators.minLength(6)]],
    }, { validator: this.passwordMatchValidator
      
       });
  }

  

  gmailValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;
      if (!email || !email.toLowerCase().endsWith('@gmail.com')) {
        return { invalidGmail: true };
      }
      return null;
    };
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('con_password');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordsNotMatch: true };
    }

    return null;
  }

  onImageChange(event: any) {
    this.image = event.target.files[0];
    
  }




  getImgUrl(): string {
    if (this.image) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;

        const byteCharacters = atob(base64Image.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/*' });

        const imageFile = new File([blob], 'image.jpg', { type: 'image/*' });
        this.registrationForm.get('image')?.setValue(imageFile);
      };
      reader.readAsDataURL(this.image);

      return '';
    }
    return '';
  }



  

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = new FormData();
  
      
      console.log('Form Values:', this.registrationForm.value);
  
      for (const key in this.registrationForm.value) {
        console.log(`Key: ${key}, Value: ${this.registrationForm.value[key]}`);
        
          formData.append(key, this.registrationForm.value[key]);
        
      }
  
      this.sendFormDataToBackend(formData);
    }
  }
  
  

  
  
  
  sendFormDataToBackend(formData: FormData) {
    this.http.post('http://localhost:8080/api/employee/addemp', formData, { responseType: 'text' })
      .subscribe(
        (response: any) => {
          console.log("Registration response", response);
          if (response.includes("User registered successfully.")) {
            console.log("Registration successful");
            alert("Registration successful");
            this.router.navigate(['/viewallemp']);
          } else {
            console.log("Unexpected response");
            alert("Unexpected response: " + response);
          }
        },
        (error) => {
          console.error("Error occurred", error);
          if (error.status === 400) {
            alert("Password and Confirm Password do not match.");
          } else if (error.status === 500) {
            alert("Error registering user. Please try again later.");
          } else {
            alert("Unexpected error occurred during registration.");
          }
        }
      );
  }
  

}
