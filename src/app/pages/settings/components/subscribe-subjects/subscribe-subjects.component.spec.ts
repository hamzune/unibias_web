import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeSubjectsComponent } from './subscribe-subjects.component';

describe('SubscribeSubjectsComponent', () => {
  let component: SubscribeSubjectsComponent;
  let fixture: ComponentFixture<SubscribeSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
