import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardsService } from '../cards/cards.service';
import { IProduit } from '../interfaces/produit';
import { ProduitsService } from '../produits/produits.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee,faBurger,faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})


export class PanierComponent implements OnInit {

  panier!:IProduit[];
  form !:FormGroup;
  z!:any[];
  t:boolean=false;
  selected!:number;
  name = new FormControl('');
  commandes:any={};
  items$ = this.product.items;
  livraison:number = 0;
  linkedin = faLinkedin;
  coffe = faCoffee;
  burg = faBurger;
  localisation = faLocationDot
  Bois:IProduit[]=[]
  Frites:IProduit[]=[]
  zon:number=0

  
  UrlCommandes = "https://127.0.0.1:8000/api/commandes";

  @ViewChild('Zone',{static: true}) Zone!:ElementRef
  constructor(private product:CardsService, private zone: ProduitsService,private _http: HttpClient) { }

  ngOnInit(): void {
    this.product.items.subscribe(next=>{
      this.panier = next
      console.log(next);
    });
    this.zone.getZones().subscribe(
      next=>{
        this.z = next                     
      }
    )
    
    this.zone.getProduits().subscribe(
      val=>{
        val.forEach(e => {
          if(e.Stock){
            this.Bois.push(e)
        }
        if(e.pot){
          this.Frites.push(e)
        }
      });
        
      }
    )
/*     this.commande(this.panier,this.selected);
 */  
}


  commande(){
    var commandes:{}={}
    var produits:object[]=[]
    var ligne:{}={}
    var zon:{}={
      id:this.zon
    }
    this.items$.subscribe(
      n=>{
        n.forEach(item=>{
          ligne={
            quantite:item.qte,
            Produit:{
              id:item.id,
            }
          }
          produits.push(ligne);
        })
      }
    )
    if(this.zon!=0){
      commandes={
        Produits:produits,
        zone:zon
      }
      this.zon=0      
    }else{
      commandes={
        Produits:produits
      }
    }
    console.log(commandes);    
   this._http.post<any>(this.UrlCommandes,commandes).subscribe()    
  }
/* 
    this.items.subscribe.forEach(e=>{
      ligne={
        quantite:e.qte,
        Produit:"/api/produits/"+e.id
      }
      produits.push(ligne);
    })
    commandes={
      Produits:produits
    }
    this.commandes = commandes;
    console.log(commandes);  
    this._http.post<any>(this.UrlCommandes,this.commandes) */

  updateName() {
    this.name.setValue('Nancy');
  }
  place(){
    if(this.name.value === 'place'){
      alert('tra');  
    }
  }
  getData(data:any){
    console.warn(data);
  }

  addProduit(produit:IProduit,ref:number):void {
    this.product.produit(produit,ref);
  }

  partial(n:number,m:number):number{
    return n*m;
  }
  total():number{
    let tot:number=0;
    this.panier.forEach(element => {
      if (element.remise) {
      tot+=(+element.prix*(100-element.remise)/100)*element.qte;
      }else{
        tot+=(+element.prix)*element.qte;
      }
    });
    return tot;
  }

  len():number{
    return this.panier.length;
  }

  selec(selec:any){
    if(selec.value!=0){
      this.selected =selec.value;
      
      this.zone.getZonesById(this.selected).subscribe(
        nex=>{
          this.zon=nex.id
          this.livraison = nex.prix;
        }
      )
      this.t=true;
    }else{
      this.t=false;
    }    
  }

}
