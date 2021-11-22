import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(value:boolean){
if(!value){
  this.vcref.createEmbeddedView(this.templetref);
}else{
  this.vcref.clear();

}
}
  constructor(private templetref:TemplateRef<any>,private vcref:ViewContainerRef) { }

}
