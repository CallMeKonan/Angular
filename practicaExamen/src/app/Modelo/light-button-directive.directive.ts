import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[LightButtonDirective]'
})
export class LightButtonDirective {

  @HostBinding('class.lit-button') private ishovering:boolean;

  constructor() {
    this.ishovering=false;
  }

  @HostListener('mouseover') onMouseOver(){
    this.ishovering=true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.ishovering=false;
  }

}
