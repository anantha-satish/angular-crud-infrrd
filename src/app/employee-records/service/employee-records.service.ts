import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';
import { Employee, Product } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRecordsService {
  private employeeUrl = 'api/employees/';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee);
  }

  editEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeeUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.employeeUrl + id);
  }
}
