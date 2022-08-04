import { IBurger } from "./burgers";
import { IFrite } from "./frite";
import { IMenu } from "./menus";
import { IProduit } from "./produit";
import { ITaille } from "./taille";

export interface IMenuBurger{
    Taille?:ITaille,
    Burger?:IBurger,
    frite?:IFrite,
    Boisson?:IProduit
    qte:number,
    }
           