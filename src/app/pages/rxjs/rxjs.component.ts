import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscription: Subscription;

  constructor() {

    this.suscription = this.regresaObservable()
    /* .pipe(
      retry(2)
    ) */
    .subscribe(
      num => console.log('Subs ', num),
      error => console.error('Error en observable: ', error),
      () => console.log('Observable completado')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Destruyendo componente");
    this.suscription.unsubscribe();
  }

  // Para definir mas de un tipo
  regresaObservable(): Observable<any> {
    return new Observable ( (observer: Subscriber<any>) => {
      let contador = 0;
      const interval = setInterval( () => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        /* if (contador === 3) {
          clearInterval(interval);
          observer.complete();
        } */
        /* if (contador === 2) {
          clearInterval(interval);
          observer.error('Fallo forzado en el observer');
        } */
      }, 1000);
    }).pipe(
      map(res => {
        return res.valor;
      }),
      filter((valor, idx) => {
        return (valor % 2 === 1);
      }),
      // repeat(3)
    );
  }

}
