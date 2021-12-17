import { Component, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs';
import { Fragment } from './fragment';

@Component({
  selector: 'stw-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent implements AfterViewInit {
  @Input() fragments!: Fragment[];
  activeFragment$ = this.route.fragment.pipe(share());

  constructor(public route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // this.fragments = this.tocService.getToc();
  }
  scrollIntoView(fragment: Fragment) {
    let element = document.getElementById(fragment.fragment);

    // console.log(fragment.positionY)

    /* this.fragments.map(fragment => {
      let element = document.getElementById(fragment.fragment);
      element?.setAttribute("style", "position: static");
    }) */

    // window.scrollTo(0 ,(fragment.positionY))

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

    /* this.fragments.map(fragment => {
      let element = document.getElementById(fragment.fragment);
      element?.setAttribute("style", "");
    }) */

  }

}
