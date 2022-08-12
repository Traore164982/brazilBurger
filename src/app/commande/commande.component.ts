import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommande } from '../interfaces/Commande';
import { ProduitsService } from '../produits/produits.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  com: ICommande[]=[];
  i!:number;
  comm!:ICommande;
  id:number=0;
  commandes:any[]=[]
  dates:any[] = [];
  completeDate=""
  dat="";
  color="btn-outline-success"
  UrlCommandes = "https://127.0.0.1:8000/api/commandes";

  constructor(private produitservice: ProduitsService,private active: ActivatedRoute, private _http: HttpClient,public _router: Router, public _location: Location) { }

  ngOnInit(): void {
     this.produitservice.getCommande().subscribe(      
        next=>{
          next.forEach(element => {
            console.log(element.date.toString().substring(0,10));
            if (element.date.toString().substring(0,10) == this.completeDate) {              
              this.commandes.push(element)
            }
          });
          
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
  recup(date:any){
    this.commandes=[]
    this.dat=date.value
    console.log(this.dat)
    console.log(this.completeDate);
   /*  if (date.value == this.completeDate) {
      this.produitservice.getCommande().subscribe(      
        next=>{
          next.forEach(element => {
            console.log(element.date.toString().substring(0,10));
            if (element.date.toString().substring(0,10) == date.value) {
              this.commandes.push(element)
            }
          });
          
        }
      )
    } */
    this.produitservice.getCommande().subscribe(      
      next=>{
        next.forEach(element => {
          console.log(element.date.toString().substring(0,10));
          if (element.date.toString().substring(0,10) == date.value) {
            this.commandes.push(element)
          }
        });
        
      }
    )
  }

  cli(t:any,btn:any){
    var update ={
      etat:"Annulée"
    }
    var update1 ={
      etat:"En Cours"
    }
    if (t.etat==="En Cours") {
      this.refresh()
      this.color="btn-outline-danger"
      this._http.put<any>(this.UrlCommandes+'/'+t.id,update).subscribe()
      btn.disabled=true 
    }
    if (t.etat==="En Attente" || t.etat==="Annulée"){
      this.refresh()
      this.color="btn-outline-success"
      this._http.put<any>(this.UrlCommandes+'/'+t.id,update1).subscribe()
      btn.disabled=true 
    }
  }
  refresh(): void {
		this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}

  val(v:any){
    console.log(v.value);
  }
}
