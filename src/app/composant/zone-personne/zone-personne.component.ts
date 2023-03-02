import { Component } from '@angular/core';
import {Personne} from "../../models/Personne";
import {ListePersonneService} from "../../services/liste-personne.service";

@Component({
  selector: 'app-zone-personne',
  templateUrl: './zone-personne.component.html',
  styleUrls: ['./zone-personne.component.css']
})
export class ZonePersonneComponent {
  public personnes : Personne[];

  constructor(
    private listePersonne : ListePersonneService
  ) {
    this.personnes = this.listePersonne.liste;
  }
}
