import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contar3().then(
      ok => {
        console.log(ok);
      }
    )
    .catch(
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

  contar3(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let contador = 0;
        const interval = setInterval(() => {
          contador += 1;
          console.log(contador);
          if (contador === 3) {
            clearInterval(interval);
            resolve('Terminando promesa');
          }
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

}
