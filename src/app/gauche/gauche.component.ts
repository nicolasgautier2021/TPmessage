import { Component, OnInit } from '@angular/core';
import {Personne} from "../class/Personne";

@Component({
  selector: 'app-gauche',
  templateUrl: './gauche.component.html',
  styleUrls: ['./gauche.component.css']
})
export class GaucheComponent implements OnInit {
  //La liste des personnes présentes est alimentée grâce à un tableau de personnes créé en
  //dur dans l’application.
  laValeurDePersonne : String;
  lstPseudo: Array<Personne>;

  constructor() {
    this.lstPseudo = [];
    let unePersonne = new Personne( 1, "Actarus");
    this.lstPseudo.push(unePersonne);

    this.lstPseudo.push(new Personne(2, "Paul"));

    this.laValeurDePersonne ='';
  }

  ngOnInit(): void {
  }

}
