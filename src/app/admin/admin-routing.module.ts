import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ComComponent } from './com/com.component';
import { CommandeComponent } from './commande/commande.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailscommandeComponent } from './detailscommande/detailscommande.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivreurComponent } from './livreur/livreur.component';
import { ProdComponent } from './prod/prod.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:[
      {
        path:'dashboard',component: DashboardComponent,
      },
      {
        path:'commande',component:CommandeComponent,
      },{
        path:'commande/:id',component:DetailscommandeComponent
      },{
        path:'commande/zone/:id',component:ZoneComponent
      },
      {
        path:'livraisons',component:LivraisonsComponent
      },
      {
        path:'livraisons/livreur/:id',component:LivreurComponent
      },
      {
        path:'produits/new',component:ProdComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
