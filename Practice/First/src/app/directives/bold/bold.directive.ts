import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this._el.nativeElement.style.fontWeight = 'bold';
    this._el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onmouseleave(){
    this._el.nativeElement.style.fontWeight = null;
    this._el.nativeElement.style.cursor = null;
  }
}
