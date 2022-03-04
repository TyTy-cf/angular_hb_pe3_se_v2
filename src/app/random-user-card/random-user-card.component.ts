import {Component, Input} from '@angular/core';
import {ApiRandomUser} from "../../models/api-randomuser/api-random-user";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random-user-card',
  templateUrl: './random-user-card.component.html',
  styleUrls: ['./random-user-card.component.scss']
})
export class RandomUserCardComponent {

  faHeart = faHeart;

  @Input()
  randomUser: ApiRandomUser|undefined;
  smallDisplay: boolean = false;

}
