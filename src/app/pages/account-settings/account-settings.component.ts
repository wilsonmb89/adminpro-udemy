import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    public _settingService: SettingsService
    ) { }

  ngOnInit() {
    this.aplicarCheck(this._settingService.ajustes.tema);
  }

  cambiarColor(tema: string) {
    /**
     * Dos formas de acceder al DOM
     */
    // console.log(this._document.getElementById("tema"), element);
    // console.log(document.getElementById("tema"));
    this.aplicarCheck(tema);
    this._settingService.aplicarTema(tema);
  }

  aplicarCheck(tema) {
    const aElements = <any> Array.from(this._document.getElementById("themecolors").getElementsByTagName("a"));
    if (!!aElements) {
      const element = aElements.find((obj) => {
        return obj.getAttribute("data-theme") === tema;
      });
      const current = this._document.querySelector("#themecolors .working");
      if (!!current) {
        current.classList.remove("working");
      }
      if (!!element) {
        element.classList.add("working");
      }
    }
  }
}
