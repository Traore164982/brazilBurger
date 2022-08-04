import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBurger } from '../interfaces/burgers';
import { IMenu } from '../interfaces/menus';
import { Catalogue } from '../model/catalogue';
import { IProduit } from '../interfaces/produit';
import { ICatalogue } from '../interfaces/catalogue';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  public title="Notre Catalogue";
  burgers:IProduit[] = [];
  menus:IProduit[] = [];
  items:any[]=[];
  subscribe?:Subscription;
  constructor(private CatalogueService: CatalogueService) {
    
   }

  ngOnInit(): void {
    // this.items = this.CatalogueService.getCatalogue();
  this.subscribe = this.CatalogueService.getCatalogue().subscribe({
     next : (catalogue:ICatalogue)=>{
       this.menus = catalogue.menu;
       this.burgers = catalogue.burger;
     },
    error: (error) => console.log(`Oups ${error}`),
    complete: () => console.log(`Sequence complete`)
    });
    
  }
}
