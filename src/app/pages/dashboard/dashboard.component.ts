import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, UserModel } from 'src/app/modules/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public user!: UserModel;
  view = {
    value : 'infobar',
  };
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;
  }

  ngOnDestroy(): void {
    delete this.user;
  }
}
