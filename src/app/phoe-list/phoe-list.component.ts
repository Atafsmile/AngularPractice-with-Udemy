import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phoe-list',
  templateUrl: './phoe-list.component.html',
  styleUrls: ['./phoe-list.component.css']
})
export class PhoeListComponent implements OnInit {
@Input() userNumber:any;
@Input() addUser:any;
  constructor() { }

  ngOnInit(): void {
  }

}
