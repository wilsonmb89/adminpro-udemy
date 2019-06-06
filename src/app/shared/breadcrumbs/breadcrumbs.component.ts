import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(
    private router: Router,
    private _title: Title,
    private _meta: Meta
  ) {
    console.log("Creando componente breadcrumbs");
    this.getDataRute()
    .subscribe(
      data => {
        this.titulo = data.titulo;
        this._title.setTitle(data.titulo);
        const metaTag: MetaDefinition = {
          name: 'description',
          content: data.titulo
        };
        this._meta.updateTag(metaTag);
      }
    );
  }

  ngOnInit() {
  }

  getDataRute() {
    return this.router.events
    .pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => {
        return !(!!evento.snapshot.firstChild);
      }),
      map((evento: ActivationEnd) => {
        return evento.snapshot.data;
      })
    );
  }

}
