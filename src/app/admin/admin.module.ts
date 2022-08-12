import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComComponent } from './com/com.component';
import { MenuComponent } from './menu/menu.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProdComponent } from './prod/prod.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ComComponent,
    MenuComponent,
    LivraisonsComponent,
    ProdComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,

  ]
})
export class AdminModule { }
