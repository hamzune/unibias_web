import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quick-actions-offcanvas',
  templateUrl: './quick-actions-offcanvas.component.html',
  styleUrls: ['./quick-actions-offcanvas.component.scss'],
})
export class QuickActionsOffcanvasComponent implements OnInit {

  @Input()
  event: any;


  extrasQuickActionsOffcanvasDirectionCSSClasses = 'offcanvas-right';
  constructor() { }

  ngOnInit(): void {
  }
  
  deleteEvent() {
    if (confirm(`Are you sure you want to delete the event '${this.event.title}'`)) {
      document.getElementById('kt_quick_actions_close').click();
      this.event.remove();
    }
  }
}
