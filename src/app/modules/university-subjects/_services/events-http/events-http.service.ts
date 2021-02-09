import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/modules/auth';
import { environment } from 'src/environments/environment';

const API_EVENTS_URL = `${environment.apiUrl}/event`;


@Injectable({
  providedIn: 'root'
})
export class EventsHttpService {
  public uuid!: string;

  constructor(private http: HttpClient,private auth: AuthService) {
    this.uuid = this.auth.currentUserValue.uuid;
   }


   // public methods
  addNewEvent(event :  any): Observable<boolean> {
    let user_uuid = this.uuid
    return this.http.post<any>(`${API_EVENTS_URL}/create`, {
      user_uuid : user_uuid,
      event_uuid : event.extendedProps.uuid,
      title : event.title,
      date_start : event.start,
      date_end : event.end,
      description : event.extendedProps.description,
      location : event.extendedProps.location,
      privatee : event.extendedProps.private,
      allday : event.allday
    });
  }

  editEvent(event :  any): Observable<boolean> {
    return this.http.put<any>(`${API_EVENTS_URL}/edit`, {
      uuid : event.extendedProps.uuid,
      title : event.title,
      date_start : event.start,
      date_end : event.end,
      description : event.extendedProps.description,
      location : event.extendedProps.location,
      privatee : event.extendedProps.private,
      allday : event.allday
    });
  }

  removeEvent(event :  any): Observable<boolean> {
    return this.http.delete<any>(`${API_EVENTS_URL}/delete/${event.extendedProps.uuid}`, {});
  }
}
