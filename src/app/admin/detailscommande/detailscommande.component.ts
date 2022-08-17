import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICommande } from '../../interfaces/Commande';
import { ProduitsService } from '../../produits/produits.service';

@Component({
  selector: 'app-detailscommande',
  templateUrl: './detailscommande.component.html',
  styleUrls: ['./detailscommande.component.css']
})
export class DetailscommandeComponent implements OnInit {
  com: ICommande[]=[];
  i!:number;
  comm!:ICommande;
  id:number=0;
  commandes:any[]=[]
  dates:any[] = [];
  completeDate=""
  dat="";

  constructor(private produitservice: ProduitsService,private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.active.snapshot.params['id'];
    this.produitservice.getCommande().subscribe(
      next=>{
      this.com =next;
      console.log(next);
      this.com.forEach(co => {
        if(this.id===co.id){
          console.log(co);
          this.comm=co;
        }
      });
      }
    )
  }

}
