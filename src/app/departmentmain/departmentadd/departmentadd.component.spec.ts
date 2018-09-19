import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentaddComponent } from './departmentadd.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

describe('DepartmentaddComponent', () => {
  let component: DepartmentaddComponent;
  let fixture: ComponentFixture<DepartmentaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentaddComponent ],
      imports:[
        HttpModule,
        FormsModule,
        RouterTestingModule
     
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
