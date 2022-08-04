import { IProduit } from "./produit";
import { ITaille } from "./taille";

export interface IRelation{
    qte: number,
    Burger?:IProduit | ITaille,
}