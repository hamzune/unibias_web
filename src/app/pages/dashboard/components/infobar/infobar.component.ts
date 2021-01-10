import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfobarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
