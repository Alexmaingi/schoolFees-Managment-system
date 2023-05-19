import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBalanceColor]',
})
export class BalanceColorDirective {
  @Input('appBalanceColor')
  feesBalance!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.feesBalance <= 0) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else if (this.feesBalance > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}
