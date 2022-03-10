import { Component, OnInit } from '@angular/core';
import {ApiRandomUserService} from "../../services/api-random-user.service";
import {ApiRandomUser} from "../../models/api-randomuser/api-random-user";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  // type d'objet contenu dans le tableau
  randomUser: ApiRandomUser|undefined;

  constructor(private apiRandomUserService: ApiRandomUserService) { }

  ngOnInit(): void {
    // Afin de tester RAPIDEMENT une valeur de retour de l'API
    // this.apiRandomUserService.getRandomUserAny().subscribe((jsonResponse) => {
    //   console.log(jsonResponse);
    // });
    this.newProfile(true);
  }

  newProfile(event: boolean): void {
    this.apiRandomUserService.getRandomUser().subscribe((jsonResponse) => {
      // getRandomUser() renvoie un Observable<ApiRandomUserResults>
      // jsonResponse est de type ApiRandomUserResults, donc je peux accéder aux attributs de cette classe/interface

      // ici je choisis de prendre le 1er élément de mon tableau car mon API renvoie un tableau
      // avec un seul élément dedans - ça m'évite de traiter un tableau par la suite
      this.randomUser = jsonResponse.results[0];
    });
  }
}
