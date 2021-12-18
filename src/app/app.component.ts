import { Component, OnInit, AfterViewInit, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { TocService } from './toc/toc.service';
import { TocComponent } from './toc/toc.component';
import { Fragment } from './toc/fragment';

@Component({
  selector: 'stw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('toc') toc!: TocComponent;

  title = 'styledictionarytailwindbridge';
  fragments: Fragment[] = [];

  constructor(private _tocService:TocService, private _ngZone: NgZone, private _changeDetectorRef: ChangeDetectorRef) {}

  familyRendered(rendered:boolean) {
    if (rendered) {
      this._ngZone.runOutsideAngular(() => {
        this.fragments = this._tocService.getToc();
        this._changeDetectorRef.detectChanges();
      });
    }
  }
}
