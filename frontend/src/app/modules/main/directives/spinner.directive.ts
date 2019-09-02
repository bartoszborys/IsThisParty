import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnInit {
  @Input('appSpinner') color: string;
  
  constructor(private el: ElementRef) { }

  ngOnInit(){
    const element = <HTMLElement>this.el.nativeElement;
    element.classList.add("lds-roller");
    element.classList.add("loader__spinner");
    element.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
    element.setAttribute("style", `margin: auto; --loader-color: ${this.color || 'black'}`);
  }
}
