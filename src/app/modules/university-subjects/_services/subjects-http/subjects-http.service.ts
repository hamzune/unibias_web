import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UniversityModel } from '../..';
import { CenterModel, SubjectModel } from '../../_models/subject.model';
import { AuthService, UserModel } from 'src/app/modules/auth';

const API_SUBJECTS_URL = `http://localhost:3000/subject`;


@Injectable({
  providedIn: 'root'
})
export class SubjectsHttpService {
  public uuid!: string;

  constructor(private http: HttpClient,private auth: AuthService) {
    this.uuid = this.auth.currentUserValue.uuid;
   }

  // public methods
  getUniversities(): Observable<UniversityModel[]> {
    return this.http.get<UniversityModel[]>(`${API_SUBJECTS_URL}/universities`, {});

  }

  getCenters(universityId): Observable<CenterModel[]> {
    return this.http.get<CenterModel[]>(`${API_SUBJECTS_URL}/centers/${universityId}`, {});
  }

  getStudies(universityId,centerId):Observable<CenterModel[]> {
    return this.http.get<CenterModel[]>(`${API_SUBJECTS_URL}/studies/${centerId}/${universityId}`, {});
  }

  getPlans(universityId,centerId,studyId):Observable<CenterModel[]> {
    return this.http.get<CenterModel[]>(`${API_SUBJECTS_URL}/plans/${studyId}/${centerId}/${universityId}`, {});
  }

  getSubjectes(universityId,centerId,studyId,planId):Observable<SubjectModel[]> {
    return this.http.get<SubjectModel[]>(`${API_SUBJECTS_URL}/subjects/${planId}/${studyId}/${centerId}/${universityId}`, {});
  }

  postSubscription(universityId:string,centerId:string,studyId:string,planId:string,subjectsId:string[]): Observable<boolean> {
    let uuid = this.uuid
    return this.http.post<boolean>(`${API_SUBJECTS_URL}/subscribe`, {
      universityId,
      centerId,
      studyId,
      planId,
      subjectsId,
      uuid
    });
  }

}
