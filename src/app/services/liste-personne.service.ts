import { Injectable } from '@angular/core';
import {Personne} from "../models/Personne";

@Injectable({
  providedIn: 'root'
})
export class ListePersonneService {

  private _liste : Personne[];

  constructor() {
    this._liste = [];
    let bob = new Personne("Morane", "Bob");
    let lucie = new Personne("Fer", "Lucie");
    let balzac = new Personne("De balzac", "Honoré");
    this._liste.push(bob);
    this._liste.push(lucie);
    this._liste.push(balzac);
  }


  get liste(): Personne[] {
    return this._liste;
  }

  set liste(value: Personne[]) {
    this._liste = value;
  }

  public ajoutPersonne(nouveau : Personne): void{
    this._liste.push(nouveau);
  }

}
