import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../_metronic/partials/layout';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private subheader: SubheaderService) { }

  ngOnInit(): void {
    document.body.getElementsByClassName('container-infobar')[0].classList.add('hidden');
    setTimeout(() => {
      this.subheader.setTitle('User Profile');
      this.subheader.setBreadcrumbs([{
        title: 'User profile',
        linkText: 'User profile',
        linkPath: '/user-profile'
      }]);
    }, 1);
  }
}
