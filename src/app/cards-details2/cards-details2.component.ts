import { Component, Input, OnInit } from '@angular/core';
import { IBoisson } from '../interfaces/Boisson';
import { IProduit } from '../interfaces/produit';

@Component({
  selector: 'app-cards-details2',
  templateUrl: './cards-details2.component.html',
  styleUrls: ['./cards-details2.component.css']
})
export class CardsDetails2Component implements OnInit {
  
  @Input() 
  prod!:IBoisson|IProduit;

  constructor() { }

  ngOnInit(): void {
  }

}
