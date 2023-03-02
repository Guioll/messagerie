import { Component } from '@angular/core';
import {Message} from "../../models/Message";
import {Personne} from "../../models/Personne";

@Component({
  selector: 'app-zone-affichage',
  templateUrl: './zone-affichage.component.html',
  styleUrls: ['./zone-affichage.component.css']
})
export class ZoneAffichageComponent {
  public messages: Message[];

  constructor() {
    this.messages = [];
    let balzac = new Personne("De balzac", "Honoré");
    let m = new Message(balzac, "Le père Goriot");
    this.messages.push(m);
  }
}
