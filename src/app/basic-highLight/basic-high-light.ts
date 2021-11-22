import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighLight]'
})

export class BasicHighLightDirective implements OnInit{
     constructor(public  elementRef:ElementRef){
    elementRef.nativeElement.style.backgroundColor='green';
     }
     ngOnInit(){
    this.elementRef.nativeElement.style.color='red';
     }
}