import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cdHoverImage]'
})
export class HoverImageDirective {

  @HostBinding('class.imagen-cambiada') private ishovering: boolean;

  constructor(private elRef: ElementRef , private renderer: Renderer2) {
    this.ishovering=false;
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setAttribute(this.elRef.nativeElement, "src", "assets/Antonio2.jpeg")
    this.ishovering=true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setAttribute(this.elRef.nativeElement, "src", "assets/Antonio1.jpeg")
    this.ishovering=false;
  }

}
