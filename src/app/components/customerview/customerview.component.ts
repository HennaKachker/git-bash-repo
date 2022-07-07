import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/match.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as XLSX from 'xlsx'; 

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  sesame_data:any[]=[];
  searchTerm: any;
  page = 1;
  pageSize = 10;
  collectionSize: any;
  filteredCount :any;
  myselect:any
  fileName= 'customer_view.xlsx'; 
  public pageSizeOptions = [10, 25, 50,70,100];
  device_name:any
  gold_number:any
  rfs_date1:any
  rfs_date2:any
  customer_code:any
  selectPageSize(event:any) {
    this.pageSize = event.target.value;
    }
    
  constructor(public service:MatchService) { }

  ngOnInit(): void {
  }
  search(event:any,myselect:any)
  {
    console.log('Hii')
    this.myselect=myselect;
    console.log(myselect)

    this.device_name= ((document.getElementById("device_name") as HTMLInputElement).value);
    this.customer_code=((document.getElementById("cust_name") as HTMLInputElement).value);
    this.gold_number=((document.getElementById("gold_number") as HTMLInputElement).value);
   
    this.rfs_date1=((document.getElementById("rfs_date1") as HTMLInputElement).value);
    this.rfs_date2=((document.getElementById("rfs_date2") as HTMLInputElement).value);
    if(this.device_name == '' && this.customer_code == '' && this.gold_number == '' && this.rfs_date1 =='' && this.rfs_date2 == '' )
    {
      alert('Please enter Device Name or Customer Name or Gold Number');
    }
    if(this.rfs_date1 !='' && this.rfs_date2 == '')
    {
      alert('Please enter RFS from Date')
    }
    else if(this.rfs_date1 =='' && this.rfs_date2 != ''){
      alert('Please enter RFS to Date')

    }

    if(this.device_name=='')
    {
      this.device_name=null
    }
    if(this.rfs_date1=='')
    {
      this.rfs_date1=null
    }
    if(this.rfs_date2=='')
    {
      this.rfs_date2=null
    }
    if(this.customer_code=='')
    {
      this.customer_code=null
    }
    if(this.gold_number=='')
    {
      this.gold_number=null
    }
    console.log('hi')
    console.log(this.device_name,this.customer_code,this.gold_number,this.rfs_date1,this.rfs_date2)

    
     this.service.getSesameData(this.device_name,this.customer_code,this.gold_number,this.rfs_date1,this.rfs_date2,myselect).subscribe(report=>{
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

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
  exportexcel(arr:any)
  {
     /* table id is passed over here */  
    console.log(arr)

    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(arr)

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
    
  }



}
