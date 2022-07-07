import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username:any
  public email:any
  public role:any
  public b_title:any
  public cuid:any
  
  constructor() { }

  public isCollapsed = true;
 
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  displayStyle = "none";

  

  ngOnInit(): void {

    this.username = sessionStorage.getItem('username')
    this.cuid = sessionStorage.getItem('cuid')
    this.email = sessionStorage.getItem('email')
    this.role = sessionStorage.getItem('role')
    this.b_title = sessionStorage.getItem('b_title')
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


}
