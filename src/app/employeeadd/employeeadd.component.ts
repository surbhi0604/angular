import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
 import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {
form: FormGroup;
  private employeeObj;
 
  model: Employee = new Employee();
  msg: string = null;
  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder, private router: Router) {

   }

   addEmployee() {
     
    let bodyObj = [
        {
            "usersso": this.model.userSSO,
            "username": this.model.userName,
            "employeeid": this.model.employeeID,
            "location": this.model.location,
            "backgroundflag": this.model.backGroundFlag,
            "joindate": "2011-09-14"

           
        }

    ]
    if(this.model.userName == null){
      alert("Please enter a valid Username")}
     else if(this.model.userSSO == null){
        alert("Please enter a valid User SSO ")
      }
       else if(this.model.employeeID == null){
        alert("Please enter a valid Employee id ")
      }
       else if(this.model.location == null){
        alert("Please enter a valid location ")
      }
       else if(this.model.backGroundFlag == null){
        alert("Please enter a valid background flag ")
      }
  
    else{
 
    this.dataService.addEmployee(bodyObj);
    alert("Employee data added successfully!");
    this.router.navigate(['/','employeelist']);
    }
}



 ngOnInit() {
    
  }

}
