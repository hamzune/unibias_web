import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CenterModel, SubjectModel, SubjectsService, UniversityModel } from 'src/app/modules/university-subjects'
import { SubjectsHttpService } from 'src/app/modules/university-subjects/_services/subjects-http';

import { FormGroup, FormControl } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';


@Component({
  selector: 'app-subscribe-subjects',
  templateUrl: './subscribe-subjects.component.html',
  styleUrls: ['./subscribe-subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeSubjectsComponent implements OnInit, OnDestroy {

  public subjects: Array<Select2OptionData> = [];
  private unsubscribe: Subscription[] = [];
  options: Options;

  isloading = false;
  universityId;
  centerId;
  studyId;
  planId;
  subjetcsId: string[];

  universities: UniversityModel[];
  centers: CenterModel[];
  studies: CenterModel[];
  plans: CenterModel[];
  t = new SubjectModel();

  subjectsForm = new FormGroup({
    university: new FormControl(''),
    center: new FormControl(''),
    studies: new FormControl(''),
    plans: new FormControl(''),

  });

  constructor(private cdr: ChangeDetectorRef, private subjectHttpService: SubjectsHttpService) {}

  async ngOnInit(): Promise<void> {

    const subs = this.subjectHttpService.getUniversities().subscribe((value) => {
      this.universities = value;
      this.cdr.detectChanges();
      subs.unsubscribe();
    })

    this.options = {
      width: '100%',
      multiple: true,

    };
  }

  async changeUniversity(e) {
    this.universityId = e.target.value;
    const subs2 = this.subjectHttpService.getCenters(this.universityId).subscribe((val) => {
      this.centers = val;
      this.cdr.detectChanges();
      subs2.unsubscribe();
    })
  }

  async changeCenter(e) {
    this.centerId = e.target.value;
    const subs2 = this.subjectHttpService.getStudies(this.universityId, this.centerId).subscribe((val) => {
      this.studies = val;
      this.cdr.detectChanges();
      subs2.unsubscribe();
    })
  }



  async changeStudy(e) {
    this.studyId = e.target.value;
    const subs2 = this.subjectHttpService.getPlans(this.universityId, this.centerId, this.studyId).subscribe((val) => {
      this.plans = val;
      this.cdr.detectChanges();
      subs2.unsubscribe();
    })
  }

  async changePlan(e) {
    this.planId = e.target.value;
    const subs2 = this.subjectHttpService.getSubjectes(this.universityId, this.centerId, this.studyId, this.planId).subscribe((val) => {
      this.subjects = []
      for (let i = 0; i < val.length; ++i) {
        let e : Select2OptionData = {id: val[i].id_asignatura.toString(),text:val[i].name};
        this.subjects.push(e);
      }
      this.cdr.detectChanges();
      subs2.unsubscribe();
    })
  }

  async subjectSubscribe(){
    this.isloading = true;
    const subs2 = this.subjectHttpService.postSubscription(this.universityId,this.centerId,this.studyId,this.planId,this.subjetcsId).subscribe((val) => {
      if(val){
        alert('Subscripcion realizada')
      }else{
        alert('Algo ha ido mal :/')

      }
      subs2.unsubscribe();
    })
    this.subjetcsId = []
    this.centers = [];
    this.studies = [];
    this.plans = [];
    this.subjects = [];
    this.isloading = false;
    
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
