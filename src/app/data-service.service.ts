import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../app/employeeadd/employeeadd.model';  
import { Department } from '../app/departmentmain/departmentadd/departmentadd.model';
import { Users } from '../app/users.model';


@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  empCols: any[];
  deptCols: any[];
  usersCols: any[];
  private employeeList: Employee[]
  private deptList: Department[]
  private usersList: Users[]


       
  constructor(private _http:Http) {
     
    this.employeeList=[]
    this.empCols=[
      
      { field: 'username', header: 'User Name' },
      { field: 'usersso', header: 'User SSO' },
      { field: 'employeeid', header: 'Emp ID' },
      { field: 'location', header: 'Location' },
      { field: 'backgroundflag', header: 'Background check Flag' },
      { header: 'Edit' },
      { header: 'Delete' }
      
      
    
    ]

    this.deptList=[]
    this.deptCols=[
    {field:'deptId',header:'Department ID' },
    {field: 'deptName', header: 'Department Name'},
    {field: 'deptManager', header: 'Department Manager'}

    ]

    this.usersList=[]
    this.usersCols=[
      {field:'userId',header:'UserID'},
      {field:'password', header:'Password'}
    ]

}

  //  postData(credentials, type)
  //  {

  //   return new Promise((resolve, reject) => {
  //     let headers = new Headers();
  //     this._http.post('http://localhost:3000/api/login/list' + type, JSON.stringify(credentials), {headers: headers})
  //       .subscribe(res => {
  //         resolve(res.json());
  //       }, (err) => {
  //         reject(err);
  //       });

  //   });
  // }
   

   addEmployee(employeeObj)
   {
     const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
     this._http.post('http://localhost:3000/api/employee/create', employeeObj,options)
  .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured in addEmployee()");
    }
  );

   }

   addDept(departmentObj)
   {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
     this._http.post('http://localhost:3000/api/department/create', departmentObj, options)
  .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured in addDepartment()");
    }
  );

   }
   addUser(usersObj)
   {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
     this._http.post('http://localhost:3000//api/login/create', usersObj, options)
     .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured in addUser()");
    }
  );

   }

   updateEmployee(employeeObj)
   {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
    this._http.post('http://localhost:3000/api/employee/update', employeeObj, options)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured in updateEmployee()");
      }
    );
  
   }

   updateDepartment(departmentObj)
   {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
    this._http.post('http://localhost:3000/api/department/update', departmentObj, options)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured in updateDepartment()");
      }
    );
  
   }


   deleteEmployee(employeeID) {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
    //console.log('employeeObj :' + JSON.stringify(employeeObj));
    this._http.get('http://localhost:3000/api/employee/delete/' + employeeID, options)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in deleteEmployee()");
        }
      );
  }

//   update(){
//     this._http.get('http://localhost:3000/api/employee/update/' + employeeID)
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         err => {
//           console.log("Error occured in deleteEmployee()");
//         }
//       );
  
// }

  deleteDepartment(departmentID) {
     const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
    //console.log('employeeObj :' + JSON.stringify(employeeObj));
    this._http.get('http://localhost:3000/api/department/delete/' + departmentID, options)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in deleteDepartment()");
        }
      );
  }

  getEmployee() {
     const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
    this.employeeList = [];
    this._http.get('http://localhost:3000/api/employee/list',options).subscribe(response => {
      let userdata = [];
      if (response.json().hits && response.json().hits.hits) {
        userdata = response.json().hits.hits;
        if (userdata.length > 0) {
          userdata.forEach(user => {
            this.employeeList.push(user._source);
            //console.log(user._source);
          });
        }
      }
    },
      err => {
        console.log("Error occured in getEmployee()");
      }
    )
    return this.employeeList;
  }
  getEmpColumns(): string[] {
    return this.empCols
  };

  getDepartment() {
     const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R7Um3OdOS6601qgn9TylIaxAa9MrAfAr0J4UZD4wSks`);
   const options = new RequestOptions({headers: headers});
    this.deptList = [];
    this._http.get('http://localhost:3000/api/department/list', options).subscribe(response => {
      let deptData = [];
      if (response.json().hits && response.json().hits.hits) {
        deptData = response.json().hits.hits;
        if (deptData.length > 0) {
          deptData.forEach(user => {
            this.deptList.push(user._source);
            //console.log(user._source);
          });
        }
      }
    },
      err => {
        console.log("Error occured in getDepartment()");
      }
    )
    return this.deptList;
  }
  
  getDeptColumns(): string[] {
    return this.deptCols
  };

}
