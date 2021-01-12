import { Injectable, OnDestroy } from '@angular/core';
import { SubjectsHttpService } from './subjects-http'
import { SubjectModel } from './../_models/subject.model'
import { UniversityModel } from './../_models/university.model'
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';


import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/


  isLoading$: Observable<boolean>;
  universities: Observable<UniversityModel[]>;
  isLoadingSubject: BehaviorSubject<boolean>;
  universitiesSubject: BehaviorSubject<UniversityModel[]>;

  constructor(private subjectHttpService: SubjectsHttpService) {

    this.universitiesSubject = <BehaviorSubject<UniversityModel[]>>new BehaviorSubject([]);
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
    this.universities = this.universitiesSubject.asObservable();
    const subscr = this.getUnis().subscribe();
    this.unsubscribe.push(subscr);

  }

  get universitiesValues(): UniversityModel[] {
    return this.universitiesSubject.value;
  }


  getUnis(): Observable<UniversityModel[]> {

    this.isLoadingSubject.next(true);
    return this.subjectHttpService.getUniversities().pipe(
      map((universities: UniversityModel[]) => {
        if (universities) {
          this.universitiesSubject = new BehaviorSubject<UniversityModel[]>(universities);
        } else {
          console.log('fuuck');
        }
        return universities;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  
}
