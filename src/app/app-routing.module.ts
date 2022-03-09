import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RandomUserComponent} from "./random-user/random-user.component";
import {HousesComponent} from "./harry-potter/houses/houses.component";
import {WizardComponent} from "./harry-potter/wizard/wizard.component";
import {WizardElixirsComponent} from "./harry-potter/wizard-elixirs/wizard-elixirs.component";

const routes: Routes = [
  { path: '', component: RandomUserComponent },
  { path: 'harry-potter/houses', component: HousesComponent },
  { path: 'harry-potter', component: HousesComponent },
  { path: 'harry-potter/wizards', component: WizardComponent },
  { path: 'harry-potter/wizards/:uuid/elixirs', component: WizardElixirsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
