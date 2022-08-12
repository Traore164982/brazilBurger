import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICommande } from '../interfaces/Commande';
import { ProduitsService } from '../produits/produits.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor(private produitservice: ProduitsService, private _http: HttpClient,public _router: Router, public _location: Location) { }

  public commandes:any[]=[];
  completeDate=""
  UrlCommandes = "https://127.0.0.1:8000/api/commandes";

  public i=0;
  ngOnInit(): void {
    this.produitservice.getCommandes().subscribe(
      next=>{
        this.commandes = next              
      }
    )
    const date = new Date()
    const year = date.getFullYear()
    
    let month: number | string = date.getMonth() + 1
    let day: number | string = date.getDate()
    
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    
    const today = `${year}-${month}-${day}`    
    this.completeDate = today;
  }
  
  updatecommande(){
    var commandes:{}={}
    var produits:object[]=[]
    var ligne:{}={}
    commandes={
      Produits:produits
    }
    this._http.post<any>(this.UrlCommandes,commandes).subscribe()    
  }

  cli(t:any,btn:any){
    var update ={
      etat:"Annuléé"
    }
    if (t.etat==="En Attente") {
      this.refresh()
      this._http.put<any>(this.UrlCommandes+'/'+t.id,update).subscribe()
      btn.disabled=true      
    }
  }
  refresh(): void {
		this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}
}
