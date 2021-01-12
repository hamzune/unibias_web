import { Component, OnInit } from '@angular/core';
import {SubjectsService,UniversityModel}  from 'src/app/modules/university-subjects'
@Component({
  selector: 'app-subscribe-subjects',
  templateUrl: './subscribe-subjects.component.html',
  styleUrls: ['./subscribe-subjects.component.scss']
})
export class SubscribeSubjectsComponent implements OnInit {

  constructor(private subjectService : SubjectsService) { }
  universityName;
  universities: any = []

  ngOnInit(): void {
    this.universities = this.subjectService.universitiesValues;
    console.log(this.universities);
  }

  changeUniversity(e) {

    // this.subjectService.getUnis();

    // this.universityName.setValue(e.target.value, {
    //   onlySelf: true
    // })


  }
}
