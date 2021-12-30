import { Component, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TocComponent } from './toc/toc.component';
import { Fragment } from './toc/fragment';

@Component({
  selector: 'stw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('toc') toc!: TocComponent;
  @ViewChild('tocContainer') tocContainer!: ElementRef;

  title = 'styledictionarytailwindbridge';
  fragments: Fragment[] = [];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  familyRendered(rendered:boolean) {
    if (rendered) {
      this.toc.addHeaders(this.tocContainer.nativeElement);
      this._changeDetectorRef.detectChanges();
    }
  }
}
