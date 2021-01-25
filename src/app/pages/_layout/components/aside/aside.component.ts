import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../_metronic/core';
import { KTUtil } from '../../../../../assets/js/components/util';
import { AuthService } from '../../../../modules/auth/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  TABS: string[] = [
    'dashboard',
    'calendar',
    'settings',
    'logout'];

  hideInfoBar: string[] = [
    'calendar',
  ];

  activeTabId;
  disableAsideSelfDisplay: boolean;
  disableAsideSecondaryDisplay: boolean;
  ulCSSClasses: string;
  asideMenuHTMLAttributes: any = {};
  asideMenuCSSClasses: string;
  asideMenuDropdown;
  brandClasses: string;
  asideMenuScroll = 1;
  asideSelfMinimizeToggle;


  constructor(private layout: LayoutService, private cdr: ChangeDetectorRef, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // document.body.classList.add('aside-minimize');

    var tab = this.route.snapshot.firstChild.routeConfig.path

    if (this.hideInfoBar.includes(tab)) {
      // if (document.body.classList.contains('aside-minimize')) {
      //   document.body.classList.remove('aside-minimize');
      // }
      document.body.getElementsByClassName('container-infobar')[0].classList.add('hidden');
    } else {
      // if (!document.body.classList.contains('aside-minimize')) {
      //   document.body.classList.add('aside-minimize');
      // }
      document.body.getElementsByClassName('container-infobar')[0].classList.remove('hidden');

    }
    this.activeTabId = tab || 'dashboard';
    // load view settings
    this.disableAsideSelfDisplay =
      this.layout.getProp('aside.self.display') === false;
    this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
    this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
    this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
    this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
    this.brandClasses = this.layout.getProp('brand');
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
    this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
    this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${this.asideMenuScroll === 1 ? 'scroll my-4 ps ps--active-y' : ''}`;
    this.disableAsideSecondaryDisplay = this.layout.getProp('aside.secondary.display');

  }


  setTab(id) {
    if (this.hideInfoBar.includes(id)) {
      // if (document.body.classList.contains('aside-minimize')) {
      //   document.body.classList.remove('aside-minimize');
      // }
      document.body.getElementsByClassName('container-infobar')[0].classList.add('hidden');
    } else {
      // if (!document.body.classList.contains('aside-minimize')) {
      //   document.body.classList.add('aside-minimize');
      // }
      document.body.getElementsByClassName('container-infobar')[0].classList.remove('hidden');

    }
    this.activeTabId = id;
    const asideWorkspace = KTUtil.find(
      document.getElementById('kt_aside'),
      '.aside-secondary .aside-workspace'
    );
    if (asideWorkspace) {
      KTUtil.scrollUpdate(asideWorkspace);
    }
    this.cdr.detectChanges();
  }

  logout() {
    this.auth.logout();
    document.location.reload();
  }
}
