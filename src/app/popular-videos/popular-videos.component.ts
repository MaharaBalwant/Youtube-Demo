import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-videos',
  templateUrl: './popular-videos.component.html',
  styleUrls: ['./popular-videos.component.css']
})
export class PopularVideosComponent implements OnInit {

  dataArray:any = [];

  constructor(
    private dataService:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getpopularvideos();
  }

  getpopularvideos(){
    this.dataService.getvideosList().subscribe(response=>{
      if(response['items'].length>0){
        this.dataArray = response['items'];
        console.log(this.dataArray);
      }
    });
  }

  showDetails(videoId){
    this.dataService.setVideoId(videoId);
    this.router.navigate(['/detail']);
  }

  uploadDetails(videoId){
    var payLoad = this.payloadObject(videoId);
    console.log(payLoad);
    this.dataService.checkKeyExist(payLoad.key).subscribe(response=>{
      if(response && response.length>0){
        this.dataService.updateVideoList(payLoad).subscribe(result=>{
          if(result){
            alert("Data Updated Sucessfully");
          }
        },err=>{
          alert(err);
        });
      }else{
        this.dataService.insertVideoList(payLoad).subscribe(result=>{
          if(result){
            alert("Data Inserted Sucessfully");
          }
        },err=>{
          alert(err);
        });
      }
    },error=>{
      alert(error);
    });
  }

  payloadObject(videoId){
    var videosDataArray:any[] = this.dataArray;
    let index = videosDataArray.findIndex(x=>(x.id==videoId));
    var objData:any = this.dataArray[index];
    return{
      key:objData.id,
      title:objData.snippet.title,
      thumbnail:objData.snippet.thumbnails.default.url
    };
  }

}
