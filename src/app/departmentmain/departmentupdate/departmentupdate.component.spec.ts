import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentupdateComponent } from './departmentupdate.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

describe('DepartmentupdateComponent', () => {
  let component: DepartmentupdateComponent;
  let fixture: ComponentFixture<DepartmentupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentupdateComponent ],
      imports:[
        HttpModule,
        FormsModule,
        RouterTestingModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
