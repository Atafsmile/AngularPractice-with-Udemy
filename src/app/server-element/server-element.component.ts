import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input,  OnDestroy,  OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@Input('servElement') element!:{type:string,name:string,content:string};
  constructor() {
    console.log('constructor run');
   }

   ngOnChanges(changes:SimpleChange):void{
    console.log('cnges happening');
console.log(changes);
  }


  ngOnInit(): void {
    console.log('ng on init run')
  }
  ngDoCheck(){
console.log('do check run')
  }
ngAfterContentInit(){
  console.log('ng after content rn')
}
ngAfterContentChecked(){
  console.log('ng after content checked rn')

}
ngAfterViewChecked(){
  console.log('ng after View Checked run')

}
ngAfterViewInit(){
  console.log('ng after View rn')


}
ngOnDestroy(){
  console.log('destroy run')

}

}
