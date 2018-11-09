import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs:['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {

  private editTitle: boolean = false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  video: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  videoUpdate(){
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo()
  {
    this.deleteVideoEvent.emit(this.video);
  }

}
