import { Injectable }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,from } from 'rxjs';
import { Catalogue } from '../model/catalogue';
import { ICatalogue } from '../interfaces/catalogue';
import { IBurger } from '../interfaces/burgers';

@Injectable({
    providedIn: 'root',
})

export class CatalogueService{   
    public https = "https://127.0.0.1:8000/api/catalogue";
    lists:object={};
    constructor(public _http: HttpClient) {

    }
    public getCatalogue():Observable<ICatalogue>{       
        return this._http.get<ICatalogue>(this.https)
    }

    
}