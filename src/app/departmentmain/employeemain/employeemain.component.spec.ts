import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemainComponent } from './employeemain.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeemainComponent', () => {
  let component: EmployeemainComponent;
  let fixture: ComponentFixture<EmployeemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeemainComponent ],
      imports:[
        RouterTestingModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
