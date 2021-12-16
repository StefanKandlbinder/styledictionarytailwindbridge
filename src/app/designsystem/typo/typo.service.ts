import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TypoService {
  baseFontSize!:string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.baseFontSize = window.getComputedStyle(this.document.body, null).getPropertyValue("font-size").split("px")[0];
  }

  getPixelfromRem(rem:string) {
    return parseFloat(this.baseFontSize) * parseFloat(rem.split("rem")[0])
  }
}
