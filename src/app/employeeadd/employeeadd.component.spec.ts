import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeaddComponent } from './employeeadd.component';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';

describe('EmployeeaddComponent', () => {
  let component: EmployeeaddComponent;
  let fixture: ComponentFixture<EmployeeaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeaddComponent ],
      imports:[
       
        FormsModule,
        HttpModule,
        RouterTestingModule,
        ReactiveFormsModule
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
