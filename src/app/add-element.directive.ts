import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective {

  @Input() elementToAdd: string;
  @Input() elementText: string;

  constructor(private el: ElementRef, private rend: Renderer2) { }

  @HostListener('click') AddElementDirective() {
    const newEle =   this.rend.createElement(this.elementToAdd);
    const eleText = this.rend.createText(this.elementText);
    
    const parent = this.rend.selectRootElement('article');

    this.rend.appendChild(newEle,eleText);
    this.rend.appendChild(parent, newEle);
    console.log(newEle);
  }
}
