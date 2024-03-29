import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Game} from '../domain/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private newGameUrl = 'http://localhost:8080/api/bowling-game/new-game';
  private gameUrl = 'http://localhost:8080/api/bowling-game/game';
  private updateGameUrl = 'http://localhost:8080/api/bowling-game/game-update';
  private numberOfPlayersUrl = 'http://localhost:8080/api/bowling-game/number-of-players';

  constructor(private http: HttpClient) {
  }

  getMaxNumberOfPlayers(): Observable<number> {
    return this.http.get<number>(this.numberOfPlayersUrl);
  }

  createNewGame(numberOfPlayers: number): Observable<Game> {
    const url = this.newGameUrl + '?playersCount=' + numberOfPlayers;

    return this.http.get<Game>(url);
  }

  getGame(): Observable<Game> {
    const url = this.gameUrl + '/' + this.getGameId();

    return this.http.get<Game>(url);
  }

  updateGame(): Observable<Game> {
    const url = this.updateGameUrl + '/' + this.getGameId();

    return this.http.get<Game>(url);
  }

  setGameId(gameId: number | string) {
    sessionStorage.setItem('gameId', gameId.toString());
  }

  getGameId() {
    return sessionStorage.getItem('gameId');
  }

  removeGame() {
    sessionStorage.removeItem('gameId');
  }
}
