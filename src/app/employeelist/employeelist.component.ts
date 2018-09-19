import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeadd/employeeadd.model';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

private employeeObj;
  model: Employee = new Employee();
  private employeeList: Employee[];
  private columns: any[];
msg: string = null;

  constructor(private dataService: DataServiceService, private router: Router) {
    this.employeeList = [];
   }
   updateEmployee(employee) {
    // let bodyObj = [
    //     {
    //         "usersso": employee.usersso ,
    //         "username": employee.username,
    //        "employeeid": employee.employeeid,
    //         "location": employee.location,
    //         "backgroundflag": employee.backgroundflag,
    //             }
    // ]
 
    // if(employee.username == null){
    //   alert("Please enter a valid Username")}
    //  else if(employee.usersso == null){
    //     alert("Please enter a valid User SSO ")
    //   }
    //    else if(employee.employeeid == null){
    //     alert("Please enter a valid Employee id ")
    //   }
    //    else if(employee.location == null){
    //     alert("Please enter a valid location ")
    //   }
    //    else if(employee.backgroundflag == null){
    //     alert("Please enter a valid background flag ")
    //   }
    
    // else{
 
    // this.dataService.updateEmployee(bodyObj);
    // alert("Employee data updated successfully!");
    // this.router.navigate(['/','employeelist']);
   console.log(employee)
     this.router.navigate(['/','employeeupdate']);
    }

 deleteEmployee(employeeid){
     if(employeeid==null){
      alert("Please enter a valid Employee Id")
     }
     else{
        this.dataService.deleteEmployee(employeeid);
        alert("Employee data deleted successfully!");
        this.router.navigate(['/','employeelist']);
     }
 }
  
  
  logout()
  {     this.router.navigate(['/']);   
    this.msg = 'Successfully logged Out!!';

  }
 

  ngOnInit() {

    this.employeeList = this.dataService.getEmployee();
    this.columns = this.dataService.getEmpColumns();
  }

}
// import { Component } from '@angular/core';

// @Component({
//  selector: 'employeelist',
//   templateUrl: './employeelist.component.html',
//   styleUrls: ['./employeelist.component.css']
// })
// export class EmployeelistComponent  {
// employees:Employee[];
// constructor(){
//   this.employees=[{name:"test"}]
// }
// }
// export class Employee{
//   name:string;
// }