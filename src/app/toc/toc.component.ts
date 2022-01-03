import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { Fragment } from './fragment';

@Component({
  selector: 'stw-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() fragments!: Fragment[];
  @Input() layout: string = "vertical";

  activeFragment$ = this.activatedRoute.fragment.pipe(share());
  navigationStart$!: Subscription;
  navigationEnd$!: Subscription;
  routerEvents$:Observable<any> = this.router.events;

  toc!: NodeList;
  tocTitle!: Fragment;

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private changeDetectorRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fragments = [];
    this.scrollToTop();
  }

  ngAfterViewInit(): void {
    // console.log(this.navigationEnd$)
    this.setFocus();
  }

  ngOnDestroy(): void {
    this.navigationEnd$.unsubscribe();
  }

  setFocus() {
    this.navigationEnd$ = this.routerEvents$.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url) {
          if (url.match('#')) {
            let fragment = url.split('#')[1];
            let focusElement = document.querySelector(`[data-toc-id="${fragment}"]`) as HTMLInputElement;
            focusElement ? focusElement.focus() : null;
          }
        }
      }
    });
  }

  addHeaders(tocContainer: HTMLElement) {
    this.setTitle(tocContainer);
    this.changeDetectorRef.detectChanges();

    this.toc = tocContainer.querySelectorAll("[data-toc]");
    this.toc.forEach(fragment => {
      let tmp = fragment as HTMLElement;
      this.fragments.push({
        fragment: tmp.id,
        name: tmp.nodeName,
        title: tmp.innerHTML,
        positionY: tmp.getBoundingClientRect().y
      });
    })
    this.changeDetectorRef.detectChanges();
  }

  setTitle(tocContainer: HTMLElement) {
    let tmp = tocContainer.querySelectorAll("[data-toc-title]")[0] as HTMLElement;

    this.tocTitle = {
      fragment: tmp.id,
      name: tmp.nodeName,
      title: tmp.innerHTML,
      positionY: tmp.getBoundingClientRect().y
    }
  }

  scrollToTop() {
    const url = this.router.url;

    if (url) {
      if (!url.match('#')) {
        const body = document.body;

        body?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        })
      }
    }
  }

  scrollIntoView(fragment: Fragment) {
    let element = document.getElementById(fragment.fragment);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
