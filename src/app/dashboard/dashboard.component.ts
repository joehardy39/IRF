
import { Component, OnInit } from '@angular/core';
import { CustData } from '../_services/form-data.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  customer:any[] = [];

   

  constructor(private cd: CustData) {}

  
  displayedColumns: string[] = ['firstname', 'Lname', 'email', 'type'];

  ngOnInit(): void {
   
   this.cd.getData().subscribe((data)=>{
    this.customer=data;
    console.log(data)
    console.warn(this.customer)
    
   })
  }
}

