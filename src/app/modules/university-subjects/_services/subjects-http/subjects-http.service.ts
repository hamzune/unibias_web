import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UniversityModel } from '../..';

const API_SUBJECTS_URL = `http://localhost:3000/subject`;


@Injectable({
  providedIn: 'root'
})
export class SubjectsHttpService {

  constructor(private http: HttpClient) { }



  // public methods
   getUniversities(): Observable<UniversityModel[]> {
    console.log('dentro');
    let v =  this.http.get<UniversityModel[]>(`${API_SUBJECTS_URL}/universities`, {});
    console.log(v);
    return v;
  }

}
