import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {} from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BurgersComponent } from './burgers/burgers.component';
import { MenusComponent } from './menus/menus.component';
import { NavComponent } from './nav/nav.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { CardsComponent } from './cards/cards.component';
import { PanierComponent } from './panier/panier.component';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { FooterComponent } from './footer/footer.component';
import { CardsDetails2Component } from './cards-details2/cards-details2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsBoissonsComponent } from './cards-boissons/cards-boissons.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommandeslistComponent } from './commandeslist/commandeslist.component';
import { BtnComponent } from './btn/btn.component';
import { CommandeComponent } from './admin/commande/commande.component';
import { DetailscommandeComponent } from './admin/detailscommande/detailscommande.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    MenusComponent,
    NavComponent,
    CatalogueComponent,
    DetailsComponent,
    ProduitsComponent,
    CardsComponent,
    PanierComponent,
    CardsDetailsComponent,
    FooterComponent,
    CardsDetails2Component,
    CardsBoissonsComponent,
    CommandesComponent,
    CommandeslistComponent,
    BtnComponent,
    CommandeComponent,
    DetailscommandeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
