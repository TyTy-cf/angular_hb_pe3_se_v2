import { Component, OnInit } from '@angular/core';
import {ApiHpService} from "../../services/api-hp.service";
import {Wizard} from "../../models/harry-potter/wizard";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  wizards: Array<Wizard> = [];

  constructor(private apiHpService: ApiHpService) { }

  ngOnInit(): void {
    this.apiHpService.getWizards().subscribe((dataJson) => {
      this.wizards = dataJson;
    });
  }

}
