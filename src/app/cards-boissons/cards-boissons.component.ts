import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IBoisson } from '../interfaces/Boisson';
import { IBoissonTaille } from '../interfaces/BoissonTaille';
import { IProduit } from '../interfaces/produit';
import { ProduitsService } from '../produits/produits.service';

@Component({
  selector: 'app-cards-boissons',
  templateUrl: './cards-boissons.component.html',
  styleUrls: ['./cards-boissons.component.css']
})
export class CardsBoissonsComponent implements OnInit {
  
  @Input() 
  prod!:IBoissonTaille;

  form!:FormGroup;

  @Input()
  value!:any;

  qte:number=0;

  nbr:number=0;


  
/* 
  dec() { this.add(this.prod,-1); } 
  inc() { this.add(this.prod,+1); } */
/*   @Output()
  boisson:EventEmitter<IBoissonTaille> = new EventEmitter<IBoissonTaille>; */

  constructor(private produitService:ProduitsService) { }

  ngOnInit(): void {        
  }

  update(n:number){
    if ((this.qte == 0 && n<0) || (this.produitService.tabQteBoisson[this.prod.Taille.id].som==this.produitService.tabQteBoisson[this.prod.Taille.id].qte && n>0)) {
     this.produitService.trouve=true
      return;
    }  
      this.qte+=n;
      this.produitService.tabQteBoisson[this.prod.Taille.id].som+=n;
      console.log(this.produitService.tabQteBoisson[this.prod.Taille.id].som);
      console.log(this.produitService.tabQteBoisson[this.prod.Taille.id]);
      console.log(this.produitService.taille);
     /*  for (let index = 0; index < this.produitService.tabQteBoisson.length; index++) {
        const element = this.produitService.tabQteBoisson[index];
        
        for (let index = 0; index < this.produitService.taille.length; index++) {
          const e = this.produitService.taille[index];
          if(element==e)         
        }
        
      } */
      

      
      console.log(this.produitService.quantite);
      
    }
     /* if((this.qte == 0 && n<0) || (this.produitService.tabQteBoisson[this.prod.Taille.id].som == this.produitService.tabQteBoisson[this.prod.Taille.id] && n>0 )) {
      return;      
    } */

  /* choix(prod:IBoissonTaille,val:any){
    prod.Boisson.qte = +val.value;
    this.boisson.emit(prod)
  } */



  /*
   choix(prod:IBoissonTaille){
    prod.Boisson.qte++;
    this.tab.push(prod)
    this.boisson.emit(prod)
    var fixe = 0;
    var trouve = false;
    if (this.tab.length==0) {
      this.tab.push(prod) 
    }else{ 
      for (let index = 0; index < this.tab.length; index++) {
        const element = this.tab[index];
        if (element.Boisson.id === this.prod.Boisson.id) {
          fixe = index;
          trouve = true;
        }else{
          this.tab.push(prod)
        }
        if(trouve){
          this.tab[fixe]=prod
        }
      }
    }
    console.log(this.tab);
    
  }
 */

  
  /* add(prod:IBoissonTaille,val:number){
    if (val==-1) {
      this.value++;
    }
    if (val==1) {
      this.value--;
    }
    this.value=this.prod.qte;
    console.log(this.value);
    this.valueChange.emit(this.value);

  } */



}
