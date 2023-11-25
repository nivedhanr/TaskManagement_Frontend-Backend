import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllemp=()=>{
    return this.http.get("http://localhost:8080/api/employee/viewAll")
  }
  getAlltask=()=>{
    return this.http.get("http://localhost:8080/api/employee/viewAlltask")
  }
  

gettaskByEmp(empCode: any) {
  return this.http.get<any[]>(`http://localhost:8080/api/employee/task/${empCode}`);
}


  empLogin = (datatosend: any) => {
    return this.http.post("http://localhost:8080/api/employee/emplogin", datatosend);
  }
  
  getEmpDetails = (empcode: number) => {
    if (isNaN(empcode) || empcode === null || empcode === undefined || empcode === 0) {
      console.error('Invalid or missing employee code for fetching details');
      return throwError('Invalid employee code');
    }
    return this.http.get(`http://localhost:8080/api/employee/${empcode}`);
  }
  
  updateTaskTrack(taskId: number, newTrack: string) {
    const url = `http://localhost:8080/api/employee/task/${taskId}/track`;
    const body = { track: newTrack }; 
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  
    return this.http.put(url, body, { headers }); 
  }
  
}
