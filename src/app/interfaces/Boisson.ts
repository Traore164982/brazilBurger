import { IBurger } from "./burgers";
import { ITaille } from "./taille";

export interface IBoisson{
    id: number,
    nom:string,
    prix:string,
    image:string,
    qte?:number,
    Burger?:IBurger,
    Taille?:ITaille,

}