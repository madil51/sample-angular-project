import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private http:HttpClient) { }
  getApiIntegration(): Observable<Object> {
   return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
