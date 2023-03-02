import { Component } from '@angular/core';
import {Message} from "../../models/Message";
import {ListePersonneService} from "../../services/liste-personne.service";

@Component({
  selector: 'app-zone-affichage',
  templateUrl: './zone-affichage.component.html',
  styleUrls: ['./zone-affichage.component.css']
})
export class ZoneAffichageComponent {
  public messages: Message[];

  constructor(
    private listePersonne : ListePersonneService
  ) {
    this.messages = [];
    let auteur = this.listePersonne.liste[2];
    let m = new Message(auteur, "Le père Goriot");
    this.messages.push(m);
  }
}
