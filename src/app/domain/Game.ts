import {Player} from './Player';
import {PlayerShort} from './PlayerShort';

export class Game {
  id: string | number;
  playersCount: number;
  currentRound: number;
  totalRound: number;
  lastHitPins: number;
  gameEnded: boolean;
  winner: string;
  currentMovingPlayer: PlayerShort = new PlayerShort();
  players: Player[] = [];
}
