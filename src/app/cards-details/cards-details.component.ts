import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBoisson } from '../interfaces/Boisson';
import { IBurger } from '../interfaces/burgers';
import { IMenuBurger } from '../interfaces/menuBurger';
import { IMenuTaille } from '../interfaces/menuTaille';
import { IProduit } from '../interfaces/produit';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.css']
})
export class CardsDetailsComponent implements OnInit {


  @Input() 
  prod!:IMenuBurger;

  @Output()
  newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
