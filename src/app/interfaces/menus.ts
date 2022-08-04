import { IRelation } from "./menu";
import { IMenuBurger } from "./menuBurger";
import { IProduit } from "./produit";
import { ITaille } from "./taille";

export interface IMenu{
    id: number,
    nom:string,
    prix:string,
    image:string,
    remise:number,
    menuBurgers?:Array<IMenuBurger>,
}