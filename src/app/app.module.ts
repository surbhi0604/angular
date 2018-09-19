import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule } from 'primeng/table';




import { AppComponent } from './app.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { DataServiceService } from './data-service.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { DepartmentmainComponent } from './departmentmain/departmentmain.component';
import { DepartmentaddComponent } from './departmentmain/departmentadd/departmentadd.component';
import { DepartmentdeleteComponent } from './departmentmain/departmentdelete/departmentdelete.component';
import { DepartmentlistComponent } from './departmentmain/departmentlist/departmentlist.component';
import { DepartmentupdateComponent } from './departmentmain/departmentupdate/departmentupdate.component';
import { EmployeemainComponent } from './departmentmain/employeemain/employeemain.component';
import { PostloginComponent } from './postlogin/postlogin.component';


// const RoutesArray: Routes = [
  //  { path: '' , component: AppComponent },
  // { path: 'postlogin' , component: PostloginComponent },
  // { path: 'employeelist' , component: EmployeelistComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent,
    EmployeeDeleteComponent,
    EmployeelistComponent,
    EmployeeupdateComponent,
    DepartmentmainComponent,
    DepartmentaddComponent,
    DepartmentdeleteComponent,
    DepartmentlistComponent,
    DepartmentupdateComponent,
    EmployeemainComponent,
    PostloginComponent,
   
 

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouteRoutingModule,
    RouterModule,
    TableModule,
    ReactiveFormsModule,
    RouterTestingModule,
    // RouterModule.forRoot(RoutesArray)
 


  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
