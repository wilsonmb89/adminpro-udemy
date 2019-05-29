import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    let initalValue = this._el.nativeElement.value;
    if (initalValue.length > 0 && initalValue[0] === "0") {
      initalValue = initalValue.substring(1);
    }
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue >= 100) {
      this._el.nativeElement.value = 100;
    } else if (initalValue <= 0) {
      this._el.nativeElement.value = 0;
    } else {
      this._el.nativeElement.value = initalValue;
    }
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
