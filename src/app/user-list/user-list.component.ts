import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  @Input() userEmail:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  list=localStorage.getItem('my data');
}
