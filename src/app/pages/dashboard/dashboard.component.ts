import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {Game} from '../../domain/Game';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public data: any;
  public clicked = true;

  game: Game = new Game();

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    this.gameService.getGame().subscribe(data => {
      this.game = data;
      console.log(this.game);
    });
  }

  updateGame() {
    this.gameService.updateGame(this.game.id).subscribe(data => {
      this.game = data;
      console.log(this.game);
    });
  }
}
