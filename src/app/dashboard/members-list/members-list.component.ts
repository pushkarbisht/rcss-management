import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id:string
  name: string;
  designation: string;
  email: string;
  contact: string;
  colliery:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "1", name: 'Pushkar Singh', designation:"Engineer", email: 'er.pushkarbisht@gmail.com',contact:"1234567890",colliery:"Singrauli"},
  {id: "2", name: 'Pushkar Singh', designation:"Engineer", email: 'er.pushkarbisht@gmail.com',contact:"1234567890",colliery:"Singrauli"},
  {id: "3", name: 'Pushkar Singh', designation:"Engineer", email: 'er.pushkarbisht@gmail.com',contact:"1234567890",colliery:"Singrauli"},
  {id: "4", name: 'Pushkar Singh', designation:"Engineer", email: 'er.pushkarbisht@gmail.com',contact:"1234567890",colliery:"Singrauli"},
  {id: "5", name: 'Pushkar Singh', designation:"Engineer", email: 'er.pushkarbisht@gmail.com',contact:"1234567890",colliery:"Singrauli"},
  {id: "6", name: 'Pushkar Singh', designation:"Engineer", email: 'er.pushkarbisht@gmail.com',contact:"1234567890",colliery:"Singrauli"},
];


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'NAME', 'DESIGNATION', 'EMAIL','CONTACT','COLLIERY'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
