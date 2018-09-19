import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Router } from '@angular/router';
import { Users } from '../app/users.model';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root', 
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  
  title = 'first-app';
  users:Array<any>;
  public userid: string;
  public password: string;

 private userObj;
 
  model: Users = new Users();

msg: string = null;

  constructor( private dataService: DataServiceService,private router: Router ) {}


addUser()
{
  let bodyObj = [
        {
            "userid": this.model.userId,
            "password": this.model.password,
           
        }

    ]
    if(this.model.userId == null || this.model.userId !="admin" ){
      this.msg = 'Please enter a valid Username';}
     else if(this.model.password == null || this.model.password !="admin"){
        this.msg = 'Please enter a valid Password';
      }
      else{
    this.dataService.addUser(bodyObj);
   //this.msg = 'Successfully logged In!!';
        this.router.navigate(['/','postlogin']);
    
      }
     
}

  
  ngOnInit()
  {
 
  }
   
}

