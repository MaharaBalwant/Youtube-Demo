import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularVideosComponent } from './popular-videos/popular-videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

import { DataService } from './data.service';

import { SafePipe } from './common/pipe/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PopularVideosComponent,
    VideoDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
