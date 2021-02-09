import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { AuthService } from 'src/app/modules/auth';
import { EventsHttpService } from 'src/app/modules/university-subjects/_services/events-http';

import { environment } from '../../../../src/environments/environment'

import KTLayoutQuickActions from '../../../assets/js/layout/extended/quick-actions';
import { KTUtil } from '../../../assets/js/components/util';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {

  selectedEvent: any = {
    title: '',
    id: ''
  };
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
    initialView: 'timeGridWeek',
    initialEvents: '', // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    lazyFetching: false,
    firstDay: 1,
    nowIndicator: true,
    locale: 'es',
    businessHours: false,
    slotDuration: "00:15:00",
    scrollTime: "08:00:00",

    // slotMinTime:1000,
    // loading: (isloading:true)=>{alert('loading')},
    // locales: [esLocale],

    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    eventAdd: async (arg) => {
      let event = arg.event.toJSON();
      event.allday = arg.event.allDay ? 1 : 0;
      console.log(event);

      let subs = this.eventhttp.addNewEvent(event).subscribe((val) => {
        if (val) {
          console.log('Evento creado')
        } else {
          console.log('Algo ha ido mal creando el evento :/')

        }
        subs.unsubscribe();
      });
    },
    eventChange: async (arg) => {
      let event = arg.event.toJSON();
      event.allday = arg.event.allDay ? 1 : 0;
      console.log(event);
      let subs = this.eventhttp.editEvent(event).subscribe((val) => {
        if (val) {
          console.log('Evento editado')
        } else {
          console.log('Algo ha ido mal editando el evento:/')

        }
        subs.unsubscribe();
      });

    },
    eventRemove: async (arg) => {

      let subs = this.eventhttp.removeEvent(arg.event.toJSON()).subscribe((val) => {
        if (val) {
          console.log('Evento eliminado')
        } else {
          console.log('Algo ha ido mal editando el evento:/')

        }
        subs.unsubscribe();
      });

    },
    /* you can update a remote database when these fire:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(private auth: AuthService, private cdr: ChangeDetectorRef, private eventhttp: EventsHttpService) {
    this.calendarOptions.initialEvents = `${environment.apiUrl}/${this.auth.currentUserValue.uuid}/calendarevents`
  }

  ngOnInit(): void {
    // Init Content
    KTUtil.ready(() => {

      KTLayoutQuickActions.init('kt_quick_actions');

    })
  }


  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        uuid :  uuidv4(),
        description: 'dasdasdasdadaadsasd',
        private: '1',
        location: 'no where',
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        borderColor:'white'
      },true);
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.selectedEvent = clickInfo.event;
    this.cdr.detectChanges();
    document.getElementById('kt_quick_actions_toggle').click();

  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;

  }

}
