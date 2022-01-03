import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TocComponent } from './toc.component';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'stw-toc-example',
  template: `
    <div class="grid grid-cols-9" #tocContainer>
      <div class="col-span-7">
        <h1 data-toc-title>Title</h1>
        <h2 id="header" data-toc class="pt-4 mb-3 z-10">Header</h2>
        <p>Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet tellus cras adipiscing enim eu turpis egestas. Vulputate mi sit amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim convallis aenean et. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus integer feugiat scelerisque varius morbi enim nunc. Convallis a cras semper auctor neque vitae tempus quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <h2 id="header-1" data-toc class="pt-4 mb-3 z-10">Header 1</h2>
        <p>Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet tellus cras adipiscing enim eu turpis egestas. Vulputate mi sit amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim convallis aenean et. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus integer feugiat scelerisque varius morbi enim nunc. Convallis a cras semper auctor neque vitae tempus quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <h2 id="header-2" data-toc class="pt-4 mb-3 z-10">Header 2</h2>
        <p>Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet tellus cras adipiscing enim eu turpis egestas. Vulputate mi sit amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim convallis aenean et. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus integer feugiat scelerisque varius morbi enim nunc. Convallis a cras semper auctor neque vitae tempus quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <h2 id="header-3" data-toc class="pt-4 mb-3 z-10">Header 3</h2>
        <p>Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet tellus cras adipiscing enim eu turpis egestas. Vulputate mi sit amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim convallis aenean et. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus integer feugiat scelerisque varius morbi enim nunc. Convallis a cras semper auctor neque vitae tempus quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <h2 id="header-4" data-toc class="pt-4 mb-3 z-10">Header 4</h2>
        <p>Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet tellus cras adipiscing enim eu turpis egestas. Vulputate mi sit amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim convallis aenean et. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus integer feugiat scelerisque varius morbi enim nunc. Convallis a cras semper auctor neque vitae tempus quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <p>Vel orci porta non pulvinar. Placerat vestibulum lectus mauris ultrices eros in. Lectus sit amet est placerat in egestas erat imperdiet. Adipiscing elit ut aliquam purus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat. Volutpat consequat mauris nunc congue nisi.</p>
        <p>Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet tellus cras adipiscing enim eu turpis egestas. Vulputate mi sit amet mauris commodo quis imperdiet. Gravida arcu ac tortor dignissim convallis aenean et. Laoreet sit amet cursus sit amet dictum sit amet justo. Tellus integer feugiat scelerisque varius morbi enim nunc. Convallis a cras semper auctor neque vitae tempus quam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
      </div>
      <aside class="col-span-2">
        <div class="sticky top-2">
          <stw-toc #toc></stw-toc>
        </div>
      </aside>
    </div>
  `,
})
class TocExampleComponent implements AfterViewInit {
  @ViewChild('toc') toc!: TocComponent;
  @ViewChild('tocContainer') tocContainer!: ElementRef;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.toc.addHeaders(this.tocContainer.nativeElement);
    this._changeDetectorRef.detectChanges();
  }
}

const routes: Routes = [
  { path: 'iframe.html', component: TocExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
class AppRoutingModule { }

export default {
  title: 'Stylewind/Table of Contents',
  component: TocExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [TocComponent],
      imports: [AppRoutingModule, CommonModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '' }
      ]
    }),
  ],
} as Meta;

const Template: Story<TocExampleComponent> = (args: TocExampleComponent) => ({
  props: args,
});

export const Vertical = Template.bind({});
