import { IBoisson } from "./Boisson";
import { IProduit } from "./produit"
import { ITaille } from "./taille";

export interface IBoissonTaille{
    id: number,
    qte: number,
    Boisson:IProduit,
    Taille:IProduit,
}