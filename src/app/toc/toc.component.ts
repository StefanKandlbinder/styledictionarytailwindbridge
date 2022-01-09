import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router, ExtraOptions } from '@angular/router';
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
  activeFragment!: string;
  navigationStart$!: Subscription;
  navigationEnd$!: Subscription;
  routerEvents$:Observable<any> = this.router.events;

  toc!: NodeList;
  tocTitle!: Fragment;

  intersectionObserver!:IntersectionObserver;
  intersectionRoot!: Element;
  intersectionRootMargin: string = "0px";

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private changeDetectorRef:ChangeDetectorRef,
    private location: Location) {}

  ngOnInit(): void {
    this.fragments = [];
    this.scrollToTop();
  }

  ngAfterViewInit(): void {
    this.navigationEnd$ = this.routerEvents$.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.setFocus(url);
      }
    });
  }

  ngOnDestroy(): void {
    this.navigationEnd$.unsubscribe();
  }

  setFocus(url:string) {
    if (url) {
      if (url.match('#')) {
        let fragment = url.split('#')[1];
        let focusElement = document.querySelector(`[data-toc-id="${fragment}"]`) as HTMLInputElement;
        focusElement ? focusElement.focus() : null;
      }
    }
  }

  addHeaders(tocContainer: HTMLElement) {
    this.setTitle(tocContainer);
    this.changeDetectorRef.detectChanges();

    this.intersectionRoot = tocContainer;
    this.createObserver();
    this.toc = tocContainer.querySelectorAll("[data-toc]");
    this.toc.forEach(fragment => {
      let tmp = fragment as HTMLElement;
      this.fragments.push({
        fragment: tmp.id,
        name: tmp.nodeName,
        title: tmp.innerHTML,
        positionY: tmp.getBoundingClientRect().y
      });
      this.addObservee(fragment as Element)
    })
    this.changeDetectorRef.detectChanges();
  }

  setTitle(tocContainer: HTMLElement) {
    let tmp = tocContainer.querySelectorAll("[data-toc-title]")[0] as HTMLElement;

    if (tmp) {
      this.tocTitle = {
        fragment: tmp.id,
        name: tmp.nodeName,
        title: tmp.innerHTML,
        positionY: tmp.getBoundingClientRect().y
      }
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

  buildThresholdList(numSteps:number) {
    let thresholds = [];

    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  createObserver() {
    let options = {
      root: null,
      rootMargin: this.intersectionRootMargin,
      threshold: this.buildThresholdList(1)
    };

    this.intersectionObserver = new IntersectionObserver(entries => this.handleIntersect(entries), options);
  }

  addObservee(observee:Element) {
    this.intersectionObserver.observe(observee);
  }

  handleIntersect(entries:IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        let elem:HTMLElement = entry.target as HTMLElement;

        if (entry.intersectionRatio >= 1) {
          const nextURL = "/#" + elem.id;
          const nextTitle = 'Changed url to ' + elem.id;
          const nextState = { additionalInformation: 'Updated the URL with JS' };

          window.history.pushState(nextState, nextTitle, nextURL);
          this.activeFragment = elem.id;
          this.setFocus(window.location.href);
        }
      }
    });
  }
}
