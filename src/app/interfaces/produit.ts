import { Tail } from "rxjs";
import { IBoissonTaille } from "./BoissonTaille";
import { IMenuBurger } from "./menuBurger";
import { IMenu } from "./menus";
import { ITaille } from "./taille";

export interface IProduit{
    id?: number,
    nom:string,
    prix:string,
    image:string,
    remise:number,
    qte:number,
    type:string,
    pot:string,
    Taille:ITaille,
    libelle:string,
    Stock:Array<IBoissonTaille>,
    menuBurgers:Array<IMenuBurger>,
    menuTailles:Array<IProduit>,
    menuFrites:Array<IMenuBurger>
}