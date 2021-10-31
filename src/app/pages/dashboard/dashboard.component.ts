import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Route, Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {Game} from '../../domain/Game';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public data: any;
  public clicked = true;

  game: Game = new Game();
  imgPath = 'assets/img/bowling/default.gif';

  constructor(private gameService: GameService,
              private alertService: AlertService,
              private imageService: ImageService,
              private router: Router) {
  }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    this.gameService.getGame().subscribe(data => {
      this.game = data;
    }, () => {
      this.gameService.removeGame();
      this.router.navigate(['/app-new-game']);
    });
  }

  updateGame() {
    this.gameService.updateGame().subscribe(data => {
      this.game = data;

      const hitPins = this.game.lastHitPins != null ? this.game.lastHitPins : -1;

      console.log(hitPins);

      this.imgPath = 'assets/img/bowling/' + this.imageService.getImageName(hitPins);

      if (this.game.winner != null && this.game.winner !== '') {
        this.alertService.success('Winner: ' + this.game.winner);
      }
    });
  }
}
