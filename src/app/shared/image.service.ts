import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {
private  query : string ;
private  API_KEY : string = environment.PIXABAY_API_KEY;
private  API_URL : string = environment.PIXABAY_API_URL;
private URL : String = this.API_URL + this.API_KEY + '&q=';
private perPage : String = '&per_page=10';


constructor ( private _http : Http ){}


    getImage(query){
  console.log("ok1:"+this.URL + query + this.perPage);
        return  this._http.get(this.URL + query + this.perPage).map(res => res.json());

    }


}


