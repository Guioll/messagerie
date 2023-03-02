import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteteComponent } from './composant/entete/entete.component';
import { ZonePersonneComponent } from './composant/zone-personne/zone-personne.component';
import { PersonneComponent } from './composant/personne/personne.component';
import { NouveauMessageComponent } from './composant/nouveau-message/nouveau-message.component';
import { ZoneAffichageComponent } from './composant/zone-affichage/zone-affichage.component';
import { MessageComponent } from './composant/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ZonePersonneComponent,
    PersonneComponent,
    NouveauMessageComponent,
    ZoneAffichageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
