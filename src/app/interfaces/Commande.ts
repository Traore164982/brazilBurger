import { ILigne } from "./Ligne"
import { IProduit } from "./produit"

export interface ICommande{
    id:number
    etat:string,
    date:Date,
    zone:IZone,
    Produits:ILigne[],
    client?:string,
    ref:string,
    gestionnaire?:string,
    }

    export interface IUser{
        id:number,
        etat:string,
        nom:string,
        prenom:string,
        email:string,
        password:string,
        telephone:string,
        matricule:string
    }

    export interface IQuartier{
        id:number,
        libelle:string,
    }
    export interface IZone{
        id:number,
        libelle:string,
        prix:number,
        commandes:ICommande[],
        quartiers:IQuartier[]
    }
    export interface ILivraison{
        id:number,
        etat:string,
        commandes:ICommande[],
        date:string
    }

         