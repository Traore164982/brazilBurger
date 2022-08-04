import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits/produits.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor(private produitservice: ProduitsService) { }

  public commandes:any[]=[];
  public i=0;
  ngOnInit(): void {
    this.produitservice.getCommandes().subscribe(
      next=>{
        this.commandes = next
        console.log(next);
        this.commandes.forEach(element => {
          console.log(element.Produits);
        });
      }
    )
  }

}
