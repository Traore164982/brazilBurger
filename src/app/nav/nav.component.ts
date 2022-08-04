import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards/cards.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  long!:number;
  constructor(private lenght: CardsService) { }
  item = this.lenght.items;
  ngOnInit(): void {
      
  }

}
