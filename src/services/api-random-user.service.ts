import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiRandomUserResults} from "../models/api-randomuser/api-random-user-results";

@Injectable({
  providedIn: 'root',
})
export class ApiRandomUserService {

  rawUrl: string = 'https://randomuser.me/api';

  constructor(private httpClient: HttpClient) { }

  // Afin de tester les données de votre API (le temps de les analyser)
  // Vous pouvez indiquer votre fonction retourne un Observable<any> :
  //
  // getRandomUserAny(): Observable<any> {
  //   return this.httpClient.get(this.rawUrl);
  // }
  //

  getRandomUser(): Observable<ApiRandomUserResults> {
    return this.httpClient.get<ApiRandomUserResults>(this.rawUrl);
  }

}
