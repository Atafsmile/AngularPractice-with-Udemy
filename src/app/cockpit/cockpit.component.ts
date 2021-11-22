import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  NewServeName='';
  NewServerContent='';
 @Output() bluePrintAdded=new EventEmitter<{serverName:string,ServerContent:string}>();
 @Output() serverCreated=new EventEmitter<{serverName:string,ServerContent:string}>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(){
    this.serverCreated.emit({
      serverName:this.NewServeName,
      ServerContent:this.NewServerContent
    });
    
    
  }


  onAddBlePrint(){
    this.bluePrintAdded.emit({
      serverName:this.NewServeName,
      ServerContent:this.NewServerContent
    });

  }
  
}
