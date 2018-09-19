import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';
import { Router } from '@angular/router';
@Component({
  selector: 'departmentupdate',
  templateUrl: './departmentupdate.component.html',
  styleUrls: ['./departmentupdate.component.css']
})
export class DepartmentupdateComponent implements OnInit {
  private departmentObj;
  model: Department = new Department();

  constructor(private dataService: DataServiceService,private router:Router) { }

  updateDepartment() {
    let bodyObj = [
        {
            "deptId": this.model.deptId,
            "deptName": this.model.deptName,
            "deptManager": this.model.deptManager,
            
        }
    ]

     if(this.model.deptId == null){
      alert("Please enter a valid Department id")}
     else if(this.model.deptName == null){
        alert("Please enter a valid Department name ")
      }
       else if(this.model.deptManager == null){
        alert("Please enter a valid Department Manager ")
      }
    else{
    this.dataService.updateDepartment(bodyObj);
    alert("Department data updated successfully!");
    this.router.navigate(['/','departmentlist']);
    }
}

  
    // this.dataService.updateDepartment(bodyObj);
    // alert("Department data updated successfully!");
  


  ngOnInit() {
  }

}
