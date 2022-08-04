import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BurgersComponent } from './burgers/burgers.component';
import { MenusComponent } from './menus/menus.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import { CommandesComponent } from './commandes/commandes.component';



const routes: Routes = [
  { path: '', component: CatalogueComponent, },
  { path: 'catalogue', component: CatalogueComponent, },
  { path: 'panier', component: PanierComponent, },
  { path: 'commandes', component: CommandesComponent, },
  { path: 'burgers', component: BurgersComponent, },
  { path: 'menus', component: MenusComponent, },
  { path: 'produits/:id', component: DetailsComponent, },
  { path: '**', component: CatalogueComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
