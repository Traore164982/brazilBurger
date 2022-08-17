import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICommande, IZone } from 'src/app/interfaces/Commande';
import { ProduitsService } from 'src/app/produits/produits.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  id:number=0
  zone!:IZone
  commandes:ICommande[]=[]
  constructor(private active: ActivatedRoute, private produitService: ProduitsService) { }

  ngOnInit(): void {
    this.id = +this.active.snapshot.params['id'];
    this.produitService.getZonesById(this.id).subscribe(
      nex=>{
        console.log(this.produitService.today);
        console.log(nex);
        this.zone=nex;
        nex.commandes.forEach(element => {
          if (element.date.toString().substring(0,10)==this.produitService.today) {
            this.commandes.push(element)
            
          }
        });
      }
    )
    
  }

}
