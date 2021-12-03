import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'styledictionarytailwindbridge';
  tableOfContents:any = [];

  ngAfterViewInit(): void {
    const toc = document.querySelectorAll("[data-toc]");
    console.log(toc)
    // toc[toc.length-1].scrollIntoView();
  }
}
