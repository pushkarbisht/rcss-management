import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  expanded1 = false
  expanded2 = false
  constructor() {
    
   }

  ngOnInit(): void {
  }
 
}
