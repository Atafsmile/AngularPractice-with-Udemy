import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBatterHighLight]'
})
export class BatterHighLightDirective implements OnInit {
  @Input() defaltWidth:string='50%';
  @Input() highWidth:string='70%';
  @HostBinding('style.color') color!:string; 
  @HostBinding('style.width')  width!:string;
@HostListener('mouseenter') mouseover(eventData:Event){
  this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
this.color='white'
this.width=this.highWidth;
} 
@HostListener('mouseleave') mouseleave(eventData:Event){
  this.render.setStyle(this.elRef.nativeElement,'background-color','yellow');
this.color='green';
this.width=this.defaltWidth;
} 

  constructor(private render:Renderer2, private elRef:ElementRef) { }
ngOnInit(){
  this.width=this.defaltWidth;
  this.color='green'
  this.render.setStyle(this.elRef.nativeElement,'background-color','yellow')
 // this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
  //this.render.setStyle(this.elRef.nativeElement,'color','red');
}
}
