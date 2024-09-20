import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8082/api/students'; 

  constructor(private http: HttpClient) { }

  addStudent(student: any): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }

}
