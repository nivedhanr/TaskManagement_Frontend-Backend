import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeenavbarComponent } from './employeenavbar.component';

describe('EmployeenavbarComponent', () => {
  let component: EmployeenavbarComponent;
  let fixture: ComponentFixture<EmployeenavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeenavbarComponent]
    });
    fixture = TestBed.createComponent(EmployeenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
