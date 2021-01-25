import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, UserModel } from 'src/app/modules/auth';
import KTLayoutQuickUser from '../../../assets/js/layout/extended/quick-user';
import { KTUtil } from '../../../assets/js/components/util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // this.user = this.auth.currentUserValue;
  }

  ngOnDestroy(): void {
    // delete this.user;
  }
}
