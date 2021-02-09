import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ExtrasModule } from '../../_metronic/partials/layout/extras/extras.module';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin,
]);

@NgModule({
  declarations: [CalendarComponent, SchedulerComponent, AppointmentsComponent],
  imports: [
    CommonModule,
    ExtrasModule,
    FullCalendarModule ,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarComponent,
      },
    ]),
  ]
})
export class CalendarModule { }
