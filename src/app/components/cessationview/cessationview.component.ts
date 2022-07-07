import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/match.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cessationview',
  templateUrl: './cessationview.component.html',
  styleUrls: ['./cessationview.component.css']
})
export class CessationviewComponent implements OnInit {
  sesame_data:any[]=[];
  constructor(public service:MatchService) { }

  ngOnInit(): void {
  }

  search(event:any)
  {
    console.log('Hii')
    var myselect='cess'
    console.log(myselect)
    var device_name= ((document.getElementById("device_name") as HTMLInputElement).value);
    var cust_name=((document.getElementById("cust_name") as HTMLInputElement).value);
    var gold_number=((document.getElementById("gold_number") as HTMLInputElement).value);
    var rfs1=((document.getElementById("rfs_date1") as HTMLInputElement).value);
    var rfs2=''
    console.log(device_name,cust_name,gold_number,rfs1,rfs2)

    
     this.service.getSesameData(device_name,cust_name,gold_number,rfs1,rfs2,myselect).subscribe(report=>{
        if(report.status=='200')
        {
          console.log(report.body.data);
          this.sesame_data=report.body.data

        }  
      },
        (err: HttpErrorResponse) => {
          alert("Server Error::: "+err.message);     
          
        })
  }//end_search

}
