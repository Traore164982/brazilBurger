import { Injectable }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduit } from '../interfaces/produit';

@Injectable({
    providedIn: 'root',
})

export class PanierService{   
    produits:IProduit[]=[];
    constructor(public _http: HttpClient) {

    }
}