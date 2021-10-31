import {Player} from './Player';
import {PlayerShort} from './PlayerShort';

export class Game {
  id: string | number;
  playersCount: number;
  currentRound: number;
  totalRound: number;
  gameEnded: boolean;
  winner: string;
  currentMovingPlayer: PlayerShort;
  players: Player[];
}
