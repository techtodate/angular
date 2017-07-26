import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images : any[];
  imagesFound: boolean = false;

  searching : boolean = false;

  handleSuccess(data){
    this.imagesFound = true;
 console.log(data.hits);
 this.images = data.hits;

  }

   handleError(error){
 console.log(error);
 
  }

  constructor(private _imageService : ImageService ) { }

  searchImages(query : string){
this.searching = true;
    console.log("ok");

  return this._imageService.getImage(query).subscribe(

    data => this.handleSuccess(data),
    error =>this.handleError(error),
    () => this.searching = false

  )

  }

  ngOnInit() {
  }

}
