
import { Component, Input, OnInit ,SimpleChange,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserListComponent implements OnInit {


  @Input() userEmail:any;
  
  constructor() { }

  ngOnInit(): void {

  }
  
  ngOnChanges(simle:SimpleChange): void{
    console.log("ng onchanges called");
    console.log(simle);
    
  }
  ngDoCheck(){
    console.log('ng do check is called');
  }

}
