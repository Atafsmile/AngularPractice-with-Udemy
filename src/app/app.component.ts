import { Component ,OnChanges,OnInit, SimpleChange} from '@angular/core';
import { AccountService } from './Services/account.service';
import { AccountComponent } from './Services/account/account.component';

@Component({
  //selector: 'app-root',
 selector:'.app-root',
  // selector:'[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onlyAdded=false;
  numbers=[1,2,3,4,5,6];
  oddNumberss=[1,3,5];
  evenNumberss=[2,4,6];
  value:number=10
  oddnumbers:number[]=[];
  evenNumber:number[]=[];
  ServerElements=[{
    type:'server',
    name:'TestServer',
    content:'Just a tets!'
  }];
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService:AccountService) {}

  ngOnInit(){
    console.log('ngOninit is Called')
    this.accounts = this.accountsService.accounts;

  }
  onServerAdd(serverData:{serverName:string,ServerContent:string}){
    this.ServerElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.ServerContent
    });
    console.log()
  }
    onBluePrintAdded(bluePrintData:{serverName:string,ServerContent:string}){
      this.ServerElements.push({
        type:'Blue-Print',
        name:bluePrintData.serverName,
        content:bluePrintData.ServerContent
      });
    }
    odestroyb(){
      this.ServerElements.splice(0,1)
    }
    onIntervalFierd(firedNumber:number){
      console.log(firedNumber)
      if(firedNumber%2===0){
        this.evenNumber.push(firedNumber);
      }else{
        this.oddnumbers.push(firedNumber);
      }
    }
  }
