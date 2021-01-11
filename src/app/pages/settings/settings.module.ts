import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SubscribeSubjectsComponent } from './components/subscribe-subjects/subscribe-subjects.component';


@NgModule({
  declarations: [SettingsComponent, SubscribeSubjectsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
