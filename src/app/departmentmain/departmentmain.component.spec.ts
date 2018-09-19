import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentmainComponent } from './departmentmain.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DepartmentmainComponent', () => {
  let component: DepartmentmainComponent;
  let fixture: ComponentFixture<DepartmentmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentmainComponent ],
      imports:[
        RouterTestingModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
