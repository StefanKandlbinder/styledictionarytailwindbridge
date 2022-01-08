import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: (() => {
      let dataTocOffset = 0;
      document.querySelectorAll("[data-toc-offset]").forEach(entry => {
        dataTocOffset += entry.scrollHeight;
      })
      console.log(dataTocOffset);
      return [0, dataTocOffset]
    }),
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
