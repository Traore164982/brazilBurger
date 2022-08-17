import { Component, OnInit } from '@angular/core';
import { ICommande, IUser, IZone } from 'src/app/interfaces/Commande';
import { ProduitsService } from 'src/app/produits/produits.service';
import { faCoffee,faBurger,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  completeDate ='';
  z:IZone[]=[];
  l:IUser[]=[];
  selected:any=0;
  localisation = faLocationDot
  deliv:ICommande[]=[]
  livrer:ICommande[] = []
  livreur:number=0
  g!:IZone
  UrlCommandes = "https://127.0.0.1:8000/api/commandes";
  form !:FormGroup;
  UrlLivraisons:string="https://127.0.0.1:8000/api/livraisons";

  

  constructor(private prod: ProduitsService,private _http: HttpClient) { }

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
          next.forEach(e=>{
          if(e.date.toString().substring(0,10)== this.completeDate){
             this.deliv.push(e)
          }
        })        
      }
    )
    this.prod.getZones().subscribe(zones=>{
      zones.forEach(zo=>{
        zo.commandes.forEach(r=>{
          var trouve=false
          if(r.date.toString().substring(0,10)== this.completeDate){
            if(this.z.length==0){
              this.z.push(zo)
            }
            this.z.forEach(p=>{
              if(zo.id!=p.id){
                trouve=true
              }else{
                trouve=false
              }
            })
            if (trouve) {
              this.z.push(zo)    
            }
          }
        })
      })
    })
    this.prod.getLivreurs().subscribe(
      next=>{
        next.forEach(t=>{
          if (t.etat=="Disponible"){
            this.l.push(t)
          }
        }
        )
      }
    )


  }

  selec(selec:any){
    this.deliv=[]
    this.selected =selec.value;
    this.livrer=[]    
    if (selec.value==0) {
      this.prod.getCommande().subscribe(
        next=>{
            next.forEach(e=>{
            if(e.date.toString().substring(0,10)== this.completeDate){
               this.deliv.push(e)
            }
          })        
        }
      )
    }
    if(selec.value!=0){
      this.deliv=[]
      this.prod.getZonesById(this.selected).subscribe(
        nex=>{
          console.log(nex);
          this.g = nex
          this.prod.getCommande().subscribe(
            next=>{
              next.forEach(e=>{
                if(e.date.toString().substring(0,10)== this.completeDate && e.zone && e.zone.id == selec.value && e.etat=="Validée"){
                  this.deliv.push(e);
                }
              })        
            }
          )
        }
      )
    }
  }
  livre(btn:any){
    this.livreur = btn.value
  }
  checked(btn:any,list:ICommande){
      if (btn.checked) {
        this.livrer.push(list)
      }else{
        var  t = list.id
        var myIndex = this.livrer.indexOf(list);
        if (myIndex!==-1) {
          this.livrer.splice(myIndex,1);
        }
      }
    }
    li(){
      var livraisons:{}={}
      var commandes:object[]=[]
      var ligne:{}={}
      var livreur:{}={
        id:+this.livreur
      }
      this.livrer.forEach(element => {
        ligne={
          id:element.id
        }
        commandes.push(ligne)
      });
    livraisons={
      commandes:commandes,
      livreur:livreur
    }
    this.livrer.forEach(element => {
      var update={
        etat:"Livraison"
      }
      this._http.put<any>(this.UrlCommandes+'/'+element.id,update).subscribe()
      console.log(element);
    });
    this._http.post<any>(this.UrlLivraisons,livraisons).subscribe()
    this.livrer=[];
    window.location.reload(); 
  }
}
