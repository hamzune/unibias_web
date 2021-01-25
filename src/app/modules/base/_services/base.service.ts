import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { BaseHttpService} from './base-http/base-http.service'
import { map, catchError, switchMap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  
  
  
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;

  events$ : Observable<any>;
  eventsSubject : BehaviorSubject<any>;

  get eventsValue(): any {
    return this.eventsSubject.value;
  }

  set eventsValue(events: any) {
    this.eventsSubject.next(events);
  }

  constructor(private baseHttpService : BaseHttpService) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.eventsSubject = new BehaviorSubject<any>(undefined);
    this.events$ = this.eventsSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserEvents().subscribe();
    this.unsubscribe.push(subscr);
  }


  getUserEvents(): Observable<any> {

    this.isLoadingSubject.next(true);
    return this.baseHttpService.getUserEvents().pipe(
      map((events: any) => {
        if (events) {
          this.eventsSubject = new BehaviorSubject<any>(events);
        }
        return events;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
