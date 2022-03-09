import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Houses} from "../models/harry-potter/houses";
import {Wizard} from "../models/harry-potter/wizard";
import {Elixir} from "../models/harry-potter/elixir";

@Injectable({
  providedIn: 'root'
})
export class ApiHpService {

  private rawUrl: string = 'https://wizard-world-api.herokuapp.com';
  private housesUrl: string = '/Houses';
  private wizardsUrl: string = '/Wizards';
  private elixirsUrl: string = '/Elixirs';

  constructor(private httpClient: HttpClient) { }

  getHouses(): Observable<Array<Houses>> {
    // https://wizard-world-api.herokuapp.com/Houses
    return this.httpClient.get<Array<Houses>>(this.rawUrl + this.housesUrl);
  }

  getWizards(): Observable<Array<Wizard>> {
    // https://wizard-world-api.herokuapp.com/Houses
    return this.httpClient.get<Array<Wizard>>(this.rawUrl + this.wizardsUrl);
  }

  getWizardByUuid(uuid: string): Observable<Wizard> {
    // https://wizard-world-api.herokuapp.com/Houses/uuid
    return this.httpClient.get<Wizard>(this.rawUrl + this.wizardsUrl + '/' + uuid);
  }

  getElixirByUuid(uuid: string): Observable<Elixir> {
    // https://wizard-world-api.herokuapp.com/Elixirs/uuid
    return this.httpClient.get<Elixir>(this.rawUrl + this.elixirsUrl + '/' + uuid);
  }
}
