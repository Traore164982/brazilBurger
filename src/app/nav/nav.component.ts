import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards/cards.service';
import { IProduit } from '../interfaces/produit';
import { ProduitsService } from '../produits/produits.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  long!:number;
  constructor(private lenght: CardsService,public produits:ProduitsService) { }
  item = this.lenght.items;
  t:boolean = true;
  value:string='';
  receive:string='';
  option:string='';
  prod:IProduit[]=[];
  filtre=["Nom","Prix","Type","Tout"];
  types=["Menu","Burger","Complement"]
  searchText:boolean=true;
  options:boolean=true;
  list:IProduit[] = [];
  T:IProduit[]=[];


  ngOnInit(): void {
    this.produits.getProduits().subscribe(
    next=>{
        this.list=next
    }
    )      
  }

  Drop(){
    if (this.t==true) {
      this.t=false
    }
  }

  Up(){
    this.t=true;
    this.T=[];
    this.receive='';
    this.searchText = true;
  }

  filter(val:any){

  }
  recup(btn:any){ 
    this.receive = btn.value;
    if(this.receive=='Type'){
      this.typ(btn)
    }
    if (this.receive!='') {
      this.searchText=false
      this.typ(btn)   
    }else{
      this.searchText = true
      this.typ(btn)
    }
    
  }

  typ(btn:any){
    this.T=[]
    if (this.receive=="Type" || this.receive == "Tout") {
      this.options=false
    }else{
      this.options=true
    }
    this.option = btn.value;
    if (this.option == "Menu"){
      this.T=[]
      this.list.forEach(element => {
        if (element.menuBurgers!=[] && element.remise) {
          this.T.push(element)
        }
      });
      
    }
    if (this.option == "Burger"){
      this.T=[]
      this.list.forEach(element => {
        if (!element.remise && element.remise==null && !element.pot && !element.Stock) {
          if (!element.menuBurgers) {
            this.T.push(element)
          }
          
        }
      });
      
    }
    if (this.option == "Complement"){
      this.T=[]
      this.list.forEach(element => {
        if (element.Stock || element.pot) {
          this.T.push(element)
        }
      });
      
    }
  }


  onEnter(value:any){
    
    this.T=[];      
    
    if(value.value.length>=3 && this.receive=="Nom"){
      this.list.forEach(element => {
        if(element.nom.toLowerCase().includes(value.value.toLowerCase())){
        /*   console.log('tra');
          console.log(element); */
          this.T.push(element)
        }
      });
    }
    if(value.value.length>=3 && this.receive=="Prix"){
      this.list.forEach(element => {
        if(element.prix == value.value){
        /*   console.log('tra');
          console.log(element); */
          this.T.push(element)
        }
      });
    }
    if(value.value.length>=3 && this.receive=="Tout"){
      var numbers = /^[0-9]+$/;
      this.list.forEach(element => {
        if(element.nom.toLowerCase().includes(value.value.toLowerCase()) || value.value.match(numbers)){
          /*   console.log('tra');
            console.log(element); */
            this.T.push(element)
          }
      });
    }
    
      
  }
}
