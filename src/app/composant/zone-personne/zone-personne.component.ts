import { Component } from '@angular/core';
import {Personne} from "../../models/Personne";

@Component({
  selector: 'app-zone-personne',
  templateUrl: './zone-personne.component.html',
  styleUrls: ['./zone-personne.component.css']
})
export class ZonePersonneComponent {
  public personnes : Personne[];

  constructor() {
    this.personnes = [];
    let bob = new Personne("Morane", "Bob");
    let lucie = new Personne("Fer", "Lucie");
    this.personnes.push(bob);
    this.personnes.push(lucie);
  }
}
