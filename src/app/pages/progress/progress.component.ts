import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso_1: Number = 50;
  progreso_2: Number = 50;
  leyenda: String = "Progress Verde";

  constructor() { }

  ngOnInit() {
  }
}
