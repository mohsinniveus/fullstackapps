import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/employees/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    console.log(employee);
    return this.http.post(`${environment.apiUrl}/employees`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.apiUrl}/employees/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/employees/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/employees`);
  }
}
