import { Component, OnInit, Output ,EventEmitter, SimpleChange, OnChanges} from '@angular/core';

import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Output() userAdd=new EventEmitter<any>();

  userNumber:any='';

  constructor( private service2:PhonesService) { }

  ngOnInit(): void {
    console.log('ngOnit called');
  }
  
  
  onUserPhoneAdds(inputData:HTMLInputElement):any{
  console.log(inputData.value);
this.userAdd.emit(inputData.value);
inputData.value='';
}

}
