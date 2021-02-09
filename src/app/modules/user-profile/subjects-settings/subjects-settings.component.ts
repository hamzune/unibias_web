import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../auth';
import { SubscribedSubjectModel } from '../../university-subjects';
import { SubjectsHttpService } from '../../university-subjects/_services/subjects-http';

@Component({
  selector: 'app-subjects-settings',
  templateUrl: './subjects-settings.component.html',
  styleUrls: ['./subjects-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectsSettingsComponent implements OnInit {

  subscriptions: Subscription[] = [];
  subscribedSubjects: SubscribedSubjectModel[];
  value = ''

  constructor(private cdr: ChangeDetectorRef, private userService: AuthService, private subjectHttpService: SubjectsHttpService) {

  }

 ngOnInit(): void {
    const subs = this.subjectHttpService.getSubscribedSubjects().subscribe(
      res => {
        this.subscribedSubjects = res;
        this.cdr.detectChanges();
        console.log(this.subscribedSubjects);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    )
    subs.unsubscribe();
  }



  async unsubscribe(id_subject,name) {
    if (confirm(`Are you sure you want to unsuscribe from '${name}'`)) {
      const subs = this.subjectHttpService.unSubscribe(id_subject).subscribe((value) => {
        for (var i = 0; i < this.subscribedSubjects.length; i++) {
          if (this.subscribedSubjects[i].id_subject == id_subject){
            this.subscribedSubjects.splice(i, 1);
          }
        }
        this.cdr.detectChanges();
        subs.unsubscribe();
      })
    }
  }


  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
