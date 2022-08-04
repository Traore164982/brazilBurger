import { Component, OnInit ,Input} from '@angular/core';
import { BurgersService } from './burgers.service';
import { Observable,pipe } from 'rxjs';
import { IBurger } from '../interfaces/burgers';
import { IProduit } from '../interfaces/produit';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit{

  
  public title="Liste des Burgers";
  @Input()
  public lists:IProduit[];

  public items;

  constructor(private BurgersService: BurgersService) { 
    this.lists = BurgersService.getBurgers();
     this.items = BurgersService.getBurger();
   }

  ngOnInit(): void {
    this.lists = this.BurgersService.getBurgers();    
    this.items = this.BurgersService.getBurger();
  }
}
