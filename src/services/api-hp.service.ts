import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Houses} from "../models/harry-potter/houses";
import {Wizard} from "../models/harry-potter/wizard";

@Injectable({
  providedIn: 'root'
})
export class ApiHpService {

  private rawUrl: string = 'https://wizard-world-api.herokuapp.com';
  private housesUrl: string = '/Houses';
  private wizardsUrl: string = '/Wizards';

  constructor(private httpClient: HttpClient) { }

  getHouses(): Observable<Array<Houses>> {
    // https://wizard-world-api.herokuapp.com/Houses
    return this.httpClient.get<Array<Houses>>(this.rawUrl + this.housesUrl);
  }

  getWizards(): Observable<Array<Wizard>> {
    // https://wizard-world-api.herokuapp.com/Houses
    return this.httpClient.get<Array<Wizard>>(this.rawUrl + this.wizardsUrl);
  }
}
