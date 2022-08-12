import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ICommande } from '../interfaces/Commande';
import { ILigne } from '../interfaces/Ligne';
import { ProduitsService } from '../produits/produits.service';

@Component({
  selector: 'app-commandeslist',
  templateUrl: './commandeslist.component.html',
  styleUrls: ['./commandeslist.component.css']
})
export class CommandeslistComponent implements OnInit {

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
    this.produitservice.getCommandes().subscribe(
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
