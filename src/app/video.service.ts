import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { Video } from './video';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private baseUrl = "http://localhost:3000/api/";
  private _getUrl = this.baseUrl+"videos";
  private _postUrl = this.baseUrl+"video";
  private _putUrl = this.baseUrl+"video/";
  private _deleteUrl = this.baseUrl+"video/";

  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._getUrl).pipe(map((response: Response) => response.json()));
  }

  addVideo(video: Video) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this._http.post(this._postUrl, JSON.stringify(video), options).
      pipe(map((response: Response) => response.json()));
  }

  updateVideo(video: Video) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this._http.put(this._putUrl+video._id, JSON.stringify(video), options).
      pipe(map((response: Response) => response.json()));
  }

  deleteVideo(video: Video){
    return this._http.delete(this._deleteUrl+video._id).pipe(map((response: Response) => response.json()));
  }


}
