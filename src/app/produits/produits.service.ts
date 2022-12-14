import { Injectable, OnInit }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable,tap } from 'rxjs';
import { IProduit } from '../interfaces/produit';
import { IBoissonTaille } from '../interfaces/BoissonTaille';
import { IBTaille } from '../interfaces/Btaille';
import { ICommande, ILivraison, IUser, IZone } from '../interfaces/Commande';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root',
})

export class ProduitsService{   
    public https = "https://127.0.0.1:8000/api/produits";
    public url =  "https://127.0.0.0:8000/api/produits/";
    public urlMenu = "http://localhost:8000/api/menus/49";
    public urlTailleBoisson = "https://127.0.0.1:8000/api/taille_boissons";
    urlZones ="https://127.0.0.1:8000/api/zones";
    urlBoissons = "https://127.0.0.1:8000/api/boissons";
    urlCommandes = "https://127.0.0.1:8000/api/commandes";
    urlCommande = "https://127.0.0.1:8000/api/clients/12/commandes";
    UrlBois = "https://127.0.0.1:8000/api/boissons";
    UrlLivreurs = "https://127.0.0.1:8000/api/livreurs";
    UrlLivreur = "https://127.0.0.1:8000/api/livreurs/13/livraisons";

    trouve=false;
    quantite:number=0;
    taille:number[]=[]
    tabQteBoisson :{
        qte: number
        som: number
    }[]=[]
    today:string=""

    public t:any=[]
    constructor(public _http: HttpClient, private _router:Router, private _location:Location) {
        const date = new Date()
        const year = date.getFullYear()
        
        let month: number | string = date.getMonth() + 1
        let day: number | string = date.getDate()
        
        if (month < 10) month = '0' + month
        if (day < 10) day = '0' + day
        
        const today = `${year}-${month}-${day}`
        this.today=today;
    }
    

    getB():Observable<IProduit[]>{
        return this._http.get<IProduit[]>(this.urlBoissons);
    }
    public getProduits():Observable<IProduit[]>{    
        return this._http.get<IProduit[]>(this.https); 
    }
    public getZones():Observable<IZone[]>{    
      return this._http.get<IZone[]>(this.urlZones); 
    }

    public getLivreurs():Observable<IUser[]>{    
        return this._http.get<IUser[]>(this.UrlLivreurs);
      }

      public getLivreur():Observable<ILivraison[]>{    
        return this._http.get<ILivraison[]>(this.UrlLivreur);
      }

    public getZonesById(ref:number):Observable<IZone>{    
        return this._http.get<IZone>(this.urlZones+'/'+ref); 
      }
    public getBoisson():Observable<IBTaille>{    
        return this._http.get<IBTaille>(this.urlTailleBoisson); 
    }

    public getBoissons():Observable<any[]>{    
        return this._http.get<any[]>(this.urlTailleBoisson); 
    }

    public getProduitsById(id:any):Observable<IProduit>{
      return this._http.get<IProduit>(this.https+'/'+id);
    }

    commande(hero:any): Observable<any> {
        return this._http.post<any>(this.urlCommandes, hero)
    }

    public getCommandes():Observable<any>{
        return this._http.get<any>(this.urlCommande);
    }

    public getCommande():Observable<ICommande[]>{
        return this._http.get<ICommande[]>(this.urlCommandes);
    }

    getBois():Observable<IProduit[]>{
        return this._http.get<IProduit[]>(this.UrlBois);
    }
    getFrites():Observable<IProduit[]>{
        return this._http.get<IProduit[]>(this.UrlBois);
    }
}