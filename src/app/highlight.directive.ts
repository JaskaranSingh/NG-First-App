import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private rend: Renderer2) { }

  @HostListener('mouseover') over() {
    this.rend.setStyle(this.el.nativeElement, 'font-size', '1.3em');
    this.rend.addClass(this.el.nativeElement, 'rotate');
    this.rend.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    console.log('Over called');
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseout') out() {
    this.rend.setStyle(this.el.nativeElement, 'font-size', '1em');
    this.rend.removeClass(this.el.nativeElement, 'rotate');
    this.rend.removeStyle(this.el.nativeElement, 'text-decoration');
    console.log('Out called');
  }
}
