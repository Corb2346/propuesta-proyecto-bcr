import { Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[colorDinamico]'
})
export class ColorDinamicoDirective {


  @ViewChild('textoColor',{static:true})textoColor!: ElementRef

  constructor(private render2 : Renderer2, private element: ElementRef) {

   }

   @HostListener('mouseenter') mouseOver(){
    this.render2.setStyle(this.element.nativeElement,'color','red');
    this.render2.setStyle(this.element.nativeElement,'backgroundColor','green');
    this.render2.setStyle(this.element.nativeElement,'fontSize','50px');
    this.render2.setStyle(this.element.nativeElement,'transition',"all 2s");
   }

   @HostListener('mouseleave') mouseLeave(){
    this.render2.setStyle(this.element.nativeElement,'color','purple');
    this.render2.setStyle(this.element.nativeElement,'backgroundColor','orange');
    this.render2.setStyle(this.element.nativeElement,'fontSize','20px');
    this.render2.setStyle(this.element.nativeElement,'transition',"all 1s");
   }

}
