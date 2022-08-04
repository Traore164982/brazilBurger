import { Injectable }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class MenusService{ 
    public https = "https://127.0.0.1:8000/api/menus";
    constructor(public _http: HttpClient) {

    }
    public getMenus():Observable<any>{    
        return this._http.get(this.https); 
    }
}