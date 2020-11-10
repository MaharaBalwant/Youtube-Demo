import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  domainServiceURL:any;
  private videoID = new BehaviorSubject<any>(false);
  constructor(
    private http:HttpClient
  ) {
    this.domainServiceURL = "http://localhost:8082/";
  }

  getvideosList(){
    let url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDgcfL8hfTWNDOasA9eNBOywbRNMVQPogo";
    return this.http.get(url);
  }

  getVideoById(videoId){
    let url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoId+"&key=AIzaSyDgcfL8hfTWNDOasA9eNBOywbRNMVQPogo";
    return this.http.get(url);
  }

  checkKeyExist(keyValue){
    let URL = this.domainServiceURL+"key/"+keyValue;
    return this.http.get(URL);
  }

  updateVideoList(paramData){
    let URL = this.domainServiceURL+"update_videolist";
    let jsonData = JSON.stringify(paramData);
    return this.http.post(URL, jsonData);
  }

  insertVideoList(paramData){
    let URL = this.domainServiceURL+"add_videolist";
    let jsonData = JSON.stringify(paramData);
    return this.http.post(URL, jsonData);
  }

  setVideoId(data) {
    this.videoID.next(data);
  }
  getVideoId():any {
    return this.videoID.value;
  }
}
