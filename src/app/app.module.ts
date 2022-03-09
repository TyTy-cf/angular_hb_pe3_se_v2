import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RandomUserComponent } from './random-user/random-user.component';
import { RandomUserCardComponent } from './random-user-card/random-user-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HousesComponent } from './harry-potter/houses/houses.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomUserComponent,
    RandomUserCardComponent,
    NavbarComponent,
    HousesComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
