import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'// d'attribut 
})

export class BorderCardDirective {
  private initialColor: string= '#f5f5f5';
  private defaultColor : string= '#009688';
  

  constructor(private el: ElementRef) { //ElementRef : reference sur l'element du dom 
    this.setBorder(this.initialColor);
    //this.setHight(200)
    
    
  }
  @Input('appBorderCard') borderColor: string;//alias
  @Input() appBorderCard: string; //sans alias

  @HostListener('mouseenter') onMouseEnter() {//lors de toucher l'element avec la souris
    this.setBorder(this.borderColor || this.defaultColor);
    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    
  }
    
  setHight(height: Number) {
    this.el.nativeElement.style.height= `${height}px`
  }
  setBorder(color: String) {
    this.el.nativeElement.style.border = `4px solid ${color} `
  }

}
