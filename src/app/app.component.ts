import { Component, AfterViewInit, OnInit, ViewChild, OnChanges } from '@angular/core';
import { TocService } from './toc/toc.service';
import { TocComponent } from './toc/toc.component';
import { Fragment } from './toc/fragment';

@Component({
  selector: 'stw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'styledictionarytailwindbridge';
  @ViewChild('toc') toc!: TocComponent;
  fragments: Fragment[] = [];

  constructor(private tocService:TocService) {}

  ngOnInit(): void {
    this.fragments = this.tocService.getToc();
  }

  ngAfterViewInit(): void {
    // this.fragments = this.tocService.getToc();
  }

  updateToc() {
    this.fragments = this.tocService.getToc();
  }
}
