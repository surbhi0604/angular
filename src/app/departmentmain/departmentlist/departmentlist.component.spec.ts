import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentlistComponent } from './departmentlist.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

describe('DepartmentlistComponent', () => {
  let component: DepartmentlistComponent;
  let fixture: ComponentFixture<DepartmentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentlistComponent ],
      imports:[
        HttpModule,
        FormsModule,
        RouterTestingModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
