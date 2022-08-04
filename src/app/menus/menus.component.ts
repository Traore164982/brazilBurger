import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/menus';
import { MenusService } from './menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  public title="Liste des Burgers";
  public lists:IMenu[]=[];
  public items;
  constructor(private MenusService: MenusService) { 
     this.items = MenusService.getMenus();
   }

  ngOnInit(): void {
    this.items = this.MenusService.getMenus();
    console.log(this.items.subscribe(console.log))
  }

}
