
import { Injectable }   from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduit } from '../interfaces/produit';
import { BehaviorSubject, take,map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CardsService{      
    
    itemsSubject = new BehaviorSubject<IProduit[]>([]);
    
    items= this.itemsSubject.asObservable();
     i:number=1;
    
    
    constructor(){
        let exist = JSON.parse(localStorage.getItem('produits') || '[]');
        if(!exist) {
            exist = [];
        }
        this.itemsSubject.next(exist);
    }
    
    produit(produit: IProduit,ref:number){
        this.items.pipe(
            take(1),map((produits:IProduit[])=>{
                let trouve = 0;
                let t=false;
                if (ref===1 || ref===2){
                    for (let index = 0; index < produits.length; index++) {
                        let element = produits[index];
                        if (element.id===produit.id) {
                            trouve = index;
                            t= true;
                        }
                    }
                    if(t){
                        if (ref==2) {
                        if(produits[trouve].qte>1){
                            produits[trouve].qte--;
                        }
                        }else{
                            produits[trouve].qte++;
                        }
                    }else{
                        this.i=1;
                        produit.qte=this.i;
                        produits.push(produit);
                    }
                }else{
                    produits.splice(produits.indexOf(produit), 1);
                }
                this.itemsSubject.next(produits);
                localStorage.setItem('produits', JSON.stringify(produits));
            }),).subscribe();
    }
}