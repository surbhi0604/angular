import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentdeleteComponent } from './departmentdelete.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

describe('DepartmentdeleteComponent', () => {
  let component: DepartmentdeleteComponent;
  let fixture: ComponentFixture<DepartmentdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentdeleteComponent ],
      imports:[
        HttpModule,
        FormsModule,
        RouterTestingModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
