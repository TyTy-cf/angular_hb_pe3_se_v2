import {Component, Input} from '@angular/core';
import { faHeart, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import {ApiRandomUser} from "../../models/api-randomuser/api-random-user";

@Component({
  selector: 'app-random-user-card',
  templateUrl: './random-user-card.component.html',
  styleUrls: ['./random-user-card.component.scss']
})
export class RandomUserCardComponent {

  faCrosshairs = faCrosshairs;
  iconFaHeart = faHeart;

  @Input()
  randomUserDaughter: ApiRandomUser|undefined;
  smallDisplay: boolean = false;

}
