import { Component, input } from '@angular/core';
import { Player } from '../../components/player/player';
import { Dealer } from '../../components/dealer/dealer';

@Component({
  imports: [Player, Dealer],
  selector: 'app-game-table',
  styleUrl: './game-table.css',
  templateUrl: './game-table.html',
})
export class GameTable {


}
