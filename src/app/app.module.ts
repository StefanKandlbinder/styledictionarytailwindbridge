import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './designsystem/colors/colors.component';
import { SpacingComponent } from './designsystem/spacing/spacing.component';
import { TypoComponent } from './designsystem/typo/typo.component';
import { ShadowComponent } from './designsystem/shadow/shadow.component';
import { TocComponent } from './toc/toc.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    SpacingComponent,
    TypoComponent,
    ShadowComponent,
    TocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
