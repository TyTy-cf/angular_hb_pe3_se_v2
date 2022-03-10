import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {faHeart, faCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {ApiRandomUser} from "../../models/api-randomuser/api-random-user";

@Component({
  selector: 'app-random-user-card',
  templateUrl: './random-user-card.component.html',
  styleUrls: ['./random-user-card.component.scss']
})
export class RandomUserCardComponent implements OnChanges {

  faCrosshairs = faCrosshairs;
  iconFaHeart = faHeart;

  // Lors d'un OutPut, on passe TOUJOURS un objet de type EventEmitter
  // le type à l'intérieur est celui qui sera transmis de la fille vers la mère
  @Output()
  eventEmitterNewProfile: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  randomUserDaughter: ApiRandomUser|undefined;
  smallDisplay: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.smallDisplay = false;
  }

  notifyMotherComponent(): void {
    // dans la fonction "emit" je passe en argument un attribut/objet du même type
    // que déclarer dans l'EventEmitter
    // lorsque la fonction emit est appelée, c'est à ce moment-là que l'information remonte
    // de la fille vers la mère
    this.eventEmitterNewProfile.emit(true);
  }

}
