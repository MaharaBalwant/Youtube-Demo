import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { PopularVideosComponent } from './popular-videos/popular-videos.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'list'},
  {path:'list', component:PopularVideosComponent},
  {path:'detail', component:VideoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
