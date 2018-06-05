import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageViewerModule, ImageViewerComponent } from 'ngx-image-viewer';

import { AppComponent } from './app.component';
import { ContainerImageComponent } from './container-image/container-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerImageComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule.forRoot({
      containerBackgroundColor: '#FFEBF8',
      wheelZoom: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
