import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';
import { Router } from '@angular/router';

@Component({
  selector: 'departmentdelete',
  templateUrl: './departmentdelete.component.html',
  styleUrls: ['./departmentdelete.component.css']
})
export class DepartmentdeleteComponent implements OnInit {

  private departmentObj;
  model: Department = new Department();
  
  constructor(private dataService: DataServiceService,private router: Router) { }

  deleteDepartment()
  {
    if(this.model.deptId==null){
      alert("Please enter a valid Department Id")
     }
     else{
    this.dataService.deleteDepartment(this.model.deptId);
    alert("Department data deleted successfully!");
    this.router.navigate(['/','departmentlist']);
     }
  }

  ngOnInit() {
  }

}
