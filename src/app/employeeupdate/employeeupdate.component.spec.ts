import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeupdateComponent } from './employeeupdate.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


describe('EmployeeupdateComponent', () => {
  let component: EmployeeupdateComponent;
  let fixture: ComponentFixture<EmployeeupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeupdateComponent ],
      imports:[
        HttpModule,
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
