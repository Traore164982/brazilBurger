import { Produits } from "./produits";

export interface Catalogue{
    member:[
        burgers:Produits[],
        menus:Produits[],
    ]
}