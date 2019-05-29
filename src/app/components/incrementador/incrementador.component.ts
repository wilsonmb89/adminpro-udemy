import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nombreLeyenda')
  private leyenda: String = "Leyenda";
  @Input()
  private progreso: Number = 50;
  @Output()
  private cambioValor: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeNum(newValue: Number) {
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor) {
    if (this.progreso + valor === 105 || this.progreso + valor === -5) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
}
