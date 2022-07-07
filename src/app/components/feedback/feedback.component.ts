import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/match.service';
import { Router, NavigationEnd, ActivatedRoute} from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { popper } from '@popperjs/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit 
{ 
  myname:any;
  comments:any;
  private router:Router
  constructor(private service: MatchService,private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
       
  }
  feedback(event:any)
  {
    event.preventDefault();
    const target =event.target;
   
    this.myname = ((document.getElementById("fname") as HTMLInputElement).value);
    this.comments = ((document.getElementById("fcomments") as HTMLInputElement).value);
    const submit= document.getElementById('submit');
    this.service.sendFeedback(this.myname,this.comments).subscribe((data :any)=> 
      {
  
        confirm(data.value);
        this.refresh();
      },
          (err: HttpErrorResponse) => {
            alert("Server Error::: "+err.message);     
            
          });        
  } 
  refresh(): void
  {
    window.location.reload()
  }
} 