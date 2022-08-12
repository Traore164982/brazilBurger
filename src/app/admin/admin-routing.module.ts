import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ComComponent } from './com/com.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProdComponent } from './prod/prod.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:[
      {
        path:'dashboard',component: DashboardComponent,
      },
      {
        path:'commandes',component:ComComponent
      },
      {
        path:'livraisons',component:LivraisonsComponent
      },{
        path:'produits',component:ProdComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
