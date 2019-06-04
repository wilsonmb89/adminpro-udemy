import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  };

  constructor(
    @Inject(DOCUMENT) private _document,
  ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    const ajustesGet = localStorage.getItem('ajustes');
    if (!!ajustesGet) {
      this.ajustes = JSON.parse(ajustesGet);
    } else {
      this.ajustes = {
        temaUrl: "assets/css/colors/default.css",
        tema: "default"
      };
    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById("tema").setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
