import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  
  selectedVideo:Video;

  videos: Array<Video>;

  isNewVideoVisible: Boolean =false;

  constructor(private _videoService : VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(resVideoData=> this.videos = resVideoData);
  }

  onSelectVideo(video:any)
  {
    this.selectedVideo = video;
    this.isNewVideoVisible = false;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video:Video)
  {
    this._videoService.postVideo(video).subscribe(resNewVideo => {this.videos.push(resNewVideo);
    this.selectedVideo = resNewVideo;
    this.isNewVideoVisible = false;
  })
  }

  makeNewVideoVisible(){
    this.isNewVideoVisible = true;
  }
  onUpdateVideoEvent(video:any)
  {
    this._videoService.updateVideo(video).subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  }
  onDeleteVideoEvent(video:any){
    this._videoService.deleteVideo(video).subscribe(resDeletedVideo =>{
      for(let i=0; i<videos.length; i++){
        if(videos[i]._id === video._id){
          videos.splice(i,1);
        }
      }
    });
    this.selectedVideo=null;
  }
}
