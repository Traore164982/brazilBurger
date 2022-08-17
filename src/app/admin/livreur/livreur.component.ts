import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICommande, ILivraison } from 'src/app/interfaces/Commande';
import { ProduitsService } from 'src/app/produits/produits.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  public Livraisons:ILivraison[]=[];
  public Commandes:ICommande[]=[];
  date:string='';
  UrlCommandes = "https://127.0.0.1:8000/api/commandes";

  constructor(private privateService: ProduitsService,private _http: HttpClient) { }

  ngOnInit(): void {
    this.date=this.privateService.today
    this.privateService.getLivreur().subscribe(
      nex=>{
        console.log(nex);
        nex.forEach(element => {
          if (element.date.toString().substring(0,10)==this.privateService.today) {
            element.commandes.forEach(e => {
              console.log(e);
              
              this.Commandes.push(e)
            });
          }
        });
      }
    )
  }
  cli(t:ICommande,btn:any,n:number){
    var update ={
      etat:"Payée"
    }
    var update1 ={
      etat:"Annulée"
    }
    console.log(t);
    console.log(btn);
    if (n==0) {
      this._http.put<any>(this.UrlCommandes+'/'+t.id,update1).subscribe()
    }
    if (n==1) {
      this._http.put<any>(this.UrlCommandes+'/'+t.id,update).subscribe()
    }
    window.location.reload();
    // if (t.etat==="Livraison") {
    // }
  }
}
