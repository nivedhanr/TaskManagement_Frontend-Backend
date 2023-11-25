import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeetaskComponent } from './viewemployeetask.component';

describe('ViewemployeetaskComponent', () => {
  let component: ViewemployeetaskComponent;
  let fixture: ComponentFixture<ViewemployeetaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewemployeetaskComponent]
    });
    fixture = TestBed.createComponent(ViewemployeetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
