import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from '../interfaces/burgers';
import { IMenu } from '../interfaces/menus';
import { PanierService } from '../services/panier.service';
import { IProduit } from '../interfaces/produit';
import { CardsService } from './cards.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  
  @Input() 
  produit!:IProduit;
  
  @Input()
  type!:string;
  fa=faCircle

  produits?:IProduit[];

  constructor(private product:CardsService) {  }

  ngOnInit(): void {
  }

  addProduit(produit:IProduit,ref:number):void {
    produit.qte=1;
    this.product.produit(produit,ref);
  }

  
}