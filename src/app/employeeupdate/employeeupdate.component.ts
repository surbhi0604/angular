import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
 import { Router } from '@angular/router';

@Component({
  selector: 'employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  private employeeObj;
  model: Employee = new Employee();
 

  constructor(private dataService: DataServiceService, private router: Router) {

    
   }
  

   updateEmployee(employee) {
     console.log(employee);
    let bodyObj = [
        {
            
            "username": this.model.userName,
            "usersso": this.model.userSSO,
           "employeeid": this.model.employeeID,
            "location": this.model.location,
            "backgroundflag": this.model.backGroundFlag,
            
        }
    ]
   
  console.log(employee)
    if(this.model.userName == null){
      alert("Please enter a valid Username")}
     else if(this.model.userSSO == null){
        alert("Please enter a valid User SSO ")
      }
      //  else if(this.model.employeeID == null){
      //   alert("Please enter a valid Employee id ")
      // }
       else if(this.model.location == null){
        alert("Please enter a valid location ")
      }
       else if(this.model.backGroundFlag == null){
        alert("Please enter a valid background flag ")
      }
    
    else{
 
    this.dataService.updateEmployee(bodyObj);
    alert("Employee data added successfully!");
    this.router.navigate(['/','employeelist']);
    }
}


  ngOnInit() {
    
  }

}
