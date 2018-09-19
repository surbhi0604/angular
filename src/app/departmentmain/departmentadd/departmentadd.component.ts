import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';
import { Router } from '@angular/router';



@Component({
  selector: 'departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.css']
})
export class DepartmentaddComponent implements OnInit {

  private departmentObj;
  model: Department = new Department();

  constructor(private dataService: DataServiceService,private router: Router) { }

  addDept() {
    let bodyObj = [
        {
            "deptId": this.model.deptId,
            "deptName": this.model.deptName,
            "deptManager": this.model.deptManager
            
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
    this.dataService.addDept(bodyObj);
    alert("Department data added successfully!");
    this.router.navigate(['/','departmentlist']);
    }
}

  ngOnInit() {
  }

}
