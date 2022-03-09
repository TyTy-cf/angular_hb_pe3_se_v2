import { Component, OnInit } from '@angular/core';
import {ApiHpService} from "../../../services/api-hp.service";
import {ActivatedRoute} from "@angular/router";
import {Wizard} from "../../../models/harry-potter/wizard";
import {Elixir} from "../../../models/harry-potter/elixir";

@Component({
  selector: 'app-wizard-elixirs',
  templateUrl: './wizard-elixirs.component.html',
  styleUrls: ['./wizard-elixirs.component.scss']
})
export class WizardElixirsComponent implements OnInit {

  wizard: Wizard|undefined;
  elixirs: Array<Elixir> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiHpService: ApiHpService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramRoute) => {
      const uuid: string = paramRoute.uuid;
      if (uuid) {
        this.apiHpService.getWizardByUuid(uuid).subscribe((dataJson) => {
          this.wizard = dataJson;
          // Jusqu'ici c'est comme dans l'exam !
          // Les lignes dans dessous, ne le sont pas...
          if (this.wizard) {
            for (const elixirUuid of this.wizard.elixirs) {
              this.apiHpService.getElixirByUuid(elixirUuid.id).subscribe((elixirJson) => {
                this.elixirs.push(elixirJson);
              });
            }
          }
        });
      }
    });
  }

}
