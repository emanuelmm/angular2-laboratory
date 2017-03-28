import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer) { 
    console.log(this._elementRef);
    this._renderer.setElementStyle(this._elementRef.nativeElement, "background-color", "yellow")
  }

}
