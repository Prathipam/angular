import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetComponent } from './emp-det.component';

describe('EmpDetComponent', () => {
  let component: EmpDetComponent;
  let fixture: ComponentFixture<EmpDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
