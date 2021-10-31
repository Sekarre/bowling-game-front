import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {GameService} from './game.service';

@Injectable({providedIn: 'root'})
export class GameGuard implements CanActivate {

  constructor(private gameService: GameService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.gameService.getGameId() != null) {
      return true;
    }

    this.router.navigate(['/app-new-game']);
    return false;
  }
}
