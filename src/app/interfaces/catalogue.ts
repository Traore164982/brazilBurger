import { IBurger } from "./burgers";
import { IMenu } from "./menus";
import { IProduit } from "./produit";

export interface ICatalogue{
        "burger":IProduit[],
        "menu":IProduit[]
    }
            