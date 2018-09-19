import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
import { Router } from '@angular/router';


@Component({
  selector: 'employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {


  private employeeObj;
  model: Employee = new Employee();
  
  constructor(private dataService: DataServiceService, private router: Router) {

   }

   deleteEmployee()
   {
     if(this.model.employeeID==null){
      alert("Please enter a valid Employee Id")
     }
     else{
          this.router.navigate(['/','employeelist']);
     this.dataService.deleteEmployee(this.model.employeeID);
     alert("Employee data deleted successfully!");
  
     }
   }
  
   ngOnInit() {
  //     this.refreshData();
  //   this.interval = setInterval(() => { 
  //       this.refreshData(); 
  //   }, 5); 
  // }

  // refreshData(){
  //   this.dataService.getData()
  //       .subscribe(data => {
  //           this.data = data;
  //       })
  //   );
}

}
