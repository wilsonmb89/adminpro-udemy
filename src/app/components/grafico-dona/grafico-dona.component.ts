import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input()
  private leyenda: String = "Grafico Dona";
  @Input()
  private dataDona: any = [];
  @Input()
  private labelsDona: String[] = [];

  constructor() { }

  ngOnInit() {
  }

}
