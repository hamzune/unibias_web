import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsSettingsComponent } from './subjects-settings.component';

describe('SubjectsSettingsComponent', () => {
  let component: SubjectsSettingsComponent;
  let fixture: ComponentFixture<SubjectsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
