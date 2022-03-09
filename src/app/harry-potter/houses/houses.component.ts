import { Component, OnInit } from '@angular/core';
import {ApiHpService} from "../../../services/api-hp.service";
import {Houses} from "../../../models/harry-potter/houses";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  arrayHouses: Array<Houses> = [];

  constructor(private apiHpService: ApiHpService) { }

  ngOnInit(): void {
    this.apiHpService.getHouses().subscribe((dataJson) => {
      this.arrayHouses = dataJson;
      console.log(dataJson);
      console.log(this.arrayHouses);
    });
  }

}
