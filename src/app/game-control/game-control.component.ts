import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() intervalFierd=new EventEmitter<number>();
  interval: any;
  lastNumber=0;
  constructor() { }

  ngOnInit(): void {
  }
  onstartGame(){
this.interval=setInterval(()=>{
this.intervalFierd.emit(this.lastNumber+1);
this.lastNumber++;
},1000)
  }
  OnPauseGame(){
    clearInterval(this.interval)
   }

}
