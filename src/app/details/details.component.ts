import { NgForOf } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CardsService } from '../cards/cards.service';
import { IBoisson } from '../interfaces/Boisson';
import { IBoissonTaille } from '../interfaces/BoissonTaille';
import { IBurger } from '../interfaces/burgers';
import { IMenuBurger } from '../interfaces/menuBurger';
import { IMenu } from '../interfaces/menus';
import { IMenuTaille } from '../interfaces/menuTaille';
import { IProduit } from '../interfaces/produit';
import { ITaille } from '../interfaces/taille';
import { ProduitsService } from '../produits/produits.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ref?:number;
  ref1:number=54;
  list!:any[];
  elem!:IProduit;
  elemB!:IBurger;
  frite!:IProduit;
  boisson!:IProduit;
  boissonId:IProduit[]=[];
  boissons!:IBoissonTaille[];
  lib:number[]=[];
  id:IBoissonTaille[]=[];
  @ViewChild('forme',{static: true}) forme!:ElementRef
  form !:FormGroup;
  name = new FormControl();
  Bois:IProduit[]=[];
  Frites:IProduit[]=[];
  similaires:IProduit[]=[];

  test:boolean = false;

  Boisson : IBoissonTaille[] = [];

  constructor(private produitsService: ProduitsService , private active: ActivatedRoute,private product:CardsService) {
  
  }
  
  ngOnInit(): void {
/*     this.produitsService.getBois().subscribe(
      nex=>{
        this.Bois=nex;
      }
    ) */         
   this.test=this.produitsService.trouve;
  this.choix()
    
    this.produitsService.getProduits().subscribe(
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
    this.ref = +this.active.snapshot.params['id'];    
  
/*     this.getPro();
 */    /* this.produitsService.getBoisson().subscribe(
      next=>{
        console.log(next.pm);
        next.pm.forEach(e=>{
          console.log(e);             
          console.log(this.elem.menuTailles);
          this.elem.menuTailles?.forEach(elem => { 
            
            if(elem.Taille.id){

            }
           });         
        })
      }
    ) */ 
   /*  this.produitsService.getB().subscribe(
      next=>{
        this.id=next
        console.log(next);        
        this.id.forEach(elem=>{
          console.log(elem.Stock);
          elem.Stock.forEach(ele=>{  console.log(ele); });
          this.produitsService.getBoisson().subscribe(console.log);
        });
      }
      ) */
    
    this.produitsService.getProduitsById(this.ref).subscribe(
      next =>{
        if (!next.remise && !next.Stock && !next.pot) {
          this.test=true;
        }
        if (!(next.remise && next.Stock && next.pot)) {
          this.similaires =[]          
          this.produitsService.getProduits().subscribe(
            n=>{
              this.similaires=[]
              n.forEach(element => {                
                if(!element.remise && !element.menuBurgers && !element.pot && !element.Stock){
                  this.similaires.push(element);
                }else{
                  if (next.menuBurgers) {
                    if (element.menuBurgers && !element.pot && !element.Stock) {
                     if (element.remise!=null) {
                        this.similaires.push(element)             
                     }
                    }
                  }
                }
              });              
            }
          )
        }
        
        this.elem=next;
        if (this.elem.menuTailles.length==0) {
          this.test=true;
        }                       
        this.elem.menuTailles?.forEach(elem => {
          this.boissonId.push(elem);
          this.produitsService.tabQteBoisson[elem.Taille.id]= {qte:elem.qte,som:0}
          this.produitsService.taille.push(elem.Taille.id);
          this.produitsService.getBoissons().subscribe(
            nex =>{
              nex.forEach(ele=>{
                if ((elem.Taille?.id == ele.Taille?.id) && ele.qte>elem.qte) {
                  this.id.push(ele)               
                }
              });
            }
          );
       /* 
       {
        qte: number;
        som: number
    }



       if(elem.Taille?.libelle=="Canette"){
            this.produitsService.getBoisson().subscribe(
              nex=>{      
                nex.canette.forEach(e=>{
                  console.log(e.id);
                  
                  this.elem.menuTailles?.forEach(elem => {
                    elem  
                    if(elem.Taille?.id === e.Taille?.id){
                      this.id.push(e.Boisson)                      
                    }
                 });  
              })
            }
          )
        }
        if (elem.Taille?.libelle=="Gm") {
          this.produitsService.getBoisson().subscribe(
            next=>{
              next.gm.forEach(e=>{
                this.elem.menuTailles?.forEach(elem => {  
                  if(elem.Taille?.id === e.Taille?.id){
                    this.id.push(e.Boisson) 
                    console.log(this.id);                                        
                  }
                 });                                  
              })
            }
          )
        }
        if (elem.Taille?.libelle=="Pm") {
          this.produitsService.getBoisson().subscribe(
            next=>{
              next.pm.forEach(e=>{
                this.elem.menuTailles?.forEach(elem => {  
                  if(elem.Taille?.id === e.Taille?.id){
                    this.id.push(e.Boisson) 
                    console.log(this.id);                                        
                  }
                 });
              })
            }
          )
        } */
      });
      }
    );
  }

  addProduit(produit:IProduit,ref:number):void {
    produit.qte=1;
    this.product.produit(produit,ref);
  }
  choix(){
    var fixe = 0;
    var trouve = false;
    var sompm =0;
    var somgm =0;
    var somca =0;
    var somp=0
    var somg=0
    var somc=0
    console.log(this.produitsService.tabQteBoisson);
    
    /* if (this.Boisson.length==0) {
      this.Boisson.push(prod)
      this.boissonId.forEach(element => {
        if(element.Taille?.id==4){
          sompm=element.qte;
        }
        if (element.Taille?.id==5) {
          somgm=element.qte;
        }
        if (element.Taille?.id==6) {
          somca=element.qte;
        }
      });

      this.Boisson.forEach(e=>{
        if (e.Taille?.id==4) {
          somp+=e.Boisson.qte;
        }
        if (e.Taille?.id==5) {
          somg+=e.Boisson.qte;
        }
        if (e.Taille?.id==6) {
          somc+=e.Boisson.qte;
        }
      })
      if (somp==sompm && somg==somgm && somca==somc) {
        this.test=true
      }else{
        this.test = false
      } 
    }else{ 
      for (let index = 0; index < this.Boisson.length; index++) {
        const element = this.Boisson[index];
        if (element.Boisson.id === prod.Boisson.id) {
          trouve=true
          fixe = index
        } 
      }
      if(trouve){
        this.Boisson[fixe]=prod
      }else{
        prod.Boisson.qte=1
        this.Boisson.push(prod)
      }
      console.log(this.Boisson);
      console.log(this.boissonId);
      this.boissonId.forEach(element => {
        if(element.Taille?.id==4){
          sompm=element.qte;
        }
        if (element.Taille?.id==5) {
          somgm=element.qte;
        }
        if (element.Taille?.id==6) {
          somca=element.qte;
        }
      });

      this.Boisson.forEach(e=>{
        if (e.Taille?.id==4) {
          somp+=e.Boisson.qte;
        }
        if (e.Taille?.id==5) {
          somg+=e.Boisson.qte;
        }
        if (e.Taille?.id==6) {
          somc+=e.Boisson.qte;
        }
      })
      
      if (somp==sompm && somg==somgm && somca==somc) {
        this.test=true
      }else{
        this.test = false
      }
    }*/
  } 
}
