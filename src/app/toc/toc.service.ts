import { Injectable } from '@angular/core';
import { Fragment } from './fragment';

@Injectable({
  providedIn: 'root'
})
export class TocService {
  private fragments: Fragment[] = [];

  getToc() {
    const toc = document.querySelectorAll("[data-toc]");
    this.fragments = [];

    toc.forEach(fragment => {
      this.fragments.push({
        fragment: fragment.id,
        name: fragment.nodeName,
        title: fragment.innerHTML,
        positionY: fragment.getBoundingClientRect().y
      });
    })

    return this.fragments
  }
}
