import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SubscribeSubjectsComponent } from './components/subscribe-subjects/subscribe-subjects.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoreModule } from '../../_metronic/core';
import { NgSelect2Module } from 'ng-select2';
@NgModule({
  declarations: [SettingsComponent, SubscribeSubjectsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    NgSelect2Module
  ]
})
export class SettingsModule { }
