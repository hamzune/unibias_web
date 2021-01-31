import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../modules/user-profile/user-profile.module').then((m) => m.UserProfileModule),
      },
      // {
      //   path: 'ecommerce',
      //   loadChildren: () =>
      //     import('../modules/e-commerce/e-commerce.module').then(
      //       (m) => m.ECommerceModule
      //     ),
      // },
      // {
      //   path: 'user-management',
      //   loadChildren: () =>
      //     import('../modules/user-management/user-management.module').then(
      //       (m) => m.UserManagementModule
      //     ),
      // },

      // {
      //   path: 'ngbootstrap',
      //   loadChildren: () =>
      //     import('../modules/ngbootstrap/ngbootstrap.module').then(
      //       (m) => m.NgbootstrapModule
      //     ),
      // },
      // {
      //   path: 'wizards',
      //   loadChildren: () =>
      //     import('../modules/wizards/wizards.module').then(
      //       (m) => m.WizardsModule
      //     ),
      // },
      // {
      //   path: 'material',
      //   loadChildren: () =>
      //     import('../modules/material/material.module').then(
      //       (m) => m.MaterialModule
      //     ),
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
