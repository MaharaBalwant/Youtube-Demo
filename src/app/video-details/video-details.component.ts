import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  videoDetails:any;
  videoID:any = "";
  videoUrl:any;

  constructor(
    private dataService:DataService,
    private router:Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.VideoDetails();
  }

  VideoDetails(){
    this.videoID = this.dataService.getVideoId();
    if(!this.videoID){
      this.router.navigate(['/list']);
    }else{
      this.dataService.getVideoById(this.videoID).subscribe(response=>{
        if(response){
          this.videoDetails = response['items'][0];
          console.log(this.videoDetails);
          this.videoUrl = "https://www.youtube.com/embed/"+this.videoDetails.id+"?autoplay=1&mute=1";
        }else{
          console.log("Response is not coming...");
        }
      },error=>{
        console.log("Error is not coming...",error);
      });
    }
  }

}
