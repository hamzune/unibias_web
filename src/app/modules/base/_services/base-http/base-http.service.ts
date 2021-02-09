import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, UserModel } from 'src/app/modules/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  public uuid!: string;

  constructor(private http: HttpClient,private auth: AuthService) {
    this.uuid = this.auth.currentUserValue.uuid;
   }

   getUserEvents():Observable<any>{
    return this.http.get<any[]>(`${API_URL}/${this.uuid}/events`, {});
   }

   getUserClasses():Observable<any>{
    return this.http.get<any[]>(`${API_URL}/${this.uuid}/classes`, {});
   }

}
