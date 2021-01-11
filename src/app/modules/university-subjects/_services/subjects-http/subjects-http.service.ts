import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_SUBJECTS_URL = `http://localhost:3000/subject`;


@Injectable({
  providedIn: 'root'
})
export class SubjectsHttpService {

  constructor(private http: HttpClient) { }



  // public methods
  getUniversities(): Observable<any> {
    return this.http.get<any>(`${API_SUBJECTS_URL}/universities`, {});
  }

}
