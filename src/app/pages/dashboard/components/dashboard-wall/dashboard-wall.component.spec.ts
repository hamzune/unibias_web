import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWallComponent } from './dashboard-wall.component';

describe('DashboardWallComponent', () => {
  let component: DashboardWallComponent;
  let fixture: ComponentFixture<DashboardWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
