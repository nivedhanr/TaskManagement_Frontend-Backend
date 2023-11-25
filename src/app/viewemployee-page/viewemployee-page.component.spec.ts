import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeePageComponent } from './viewemployee-page.component';

describe('ViewemployeePageComponent', () => {
  let component: ViewemployeePageComponent;
  let fixture: ComponentFixture<ViewemployeePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewemployeePageComponent]
    });
    fixture = TestBed.createComponent(ViewemployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
