import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/match.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displayStyle = "none";
  msg:any

  constructor(private service: MatchService,private router:Router) { }

  ngOnInit(): void {
    
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  login(event:any){
    event.preventDefault()
    const target =event.target
    var  ftid = ((document.getElementById("ftid") as HTMLInputElement).value);   
    
    var password = ((document.getElementById("password") as HTMLInputElement).value);
   
    if( ftid=='' && ftid == null &&  password == '' && password == null)
    {
      this.msg="Please Enter FTID & Password"
     
    }
    else if(ftid=='' || ftid == null   )
    {
      this.msg="FTID Should not be blank"
     
    }
    else if( password == '' || password == null)
    {
      this.msg="Password Should not be blank"
    
    }
    else{
      this.service.getDetails(ftid,password).subscribe(data=> {

        console.log(data.status)
        if(data.status=='1')
        {
          if(data.access_token){
            console.log(data.access_token)
            this.router.navigate(['home'])
            //this.router.navigate(['user-profile/' + res.msg._id]);
            this.service.setLoggedIn(true,data.access_token,data.role,data.username,data.email,data.cuid,data.business_title)
            
          }
          else{
            alert(data.msg)
          } 
        }
        else if(data.status == '0')
        {
          this.msg="Invalid Password"
        }
           
       
      }  ,
      (err: HttpErrorResponse) => {
       // alert("Server Error:::: "+err.message);   
       //alert("Server Error:::: "+err.message); 
       this.msg="Invalid FTID"
      })
    }
    console.log(ftid,password)
  } //function ends
 

}
