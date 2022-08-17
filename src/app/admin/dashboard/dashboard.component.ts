import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/produits/produits.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  completeDate:string='';
  nombreCommande:number=0
  valide:number=0
  attente:number=0
  annule:number=0
  cours:number=0
  constructor(private prod:ProduitsService) { }

  ngOnInit(): void {
    const date = new Date()
    const year = date.getFullYear()
    
    let month: number | string = date.getMonth() + 1
    let day: number | string = date.getDate()
    
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    
    const today = `${year}-${month}-${day}`    
    this.completeDate = today;

    this.prod.getCommande().subscribe(
      next=>{
        next.forEach(element => {
          if(element.date.toString().substring(0,10)== this.completeDate){
            console.log(element);
            this.nombreCommande+=1;
            if (element.etat === "Validée") {
              this.valide+=1;
            }
            if (element.etat=="Annulée") {
              this.annule+=1;
            }
            if (element.etat=="En Cours") {
              this.cours+=1;
            }
            if (element.etat=="En Attente") {
              this.attente+=1;
            }
          }
        });
      }
    )
  }

}
