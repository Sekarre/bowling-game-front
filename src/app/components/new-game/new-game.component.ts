import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  selected = 2;
  playerCounts: number[] = [];
  newGameForm: FormGroup;

  constructor(private http: HttpClient,
              private router: Router,
              private formBuilder: FormBuilder,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.gameService.getMaxNumberOfPlayers().subscribe(data => {
      for (let i = 0; i < data; i++) {
        this.playerCounts.push(i + 1);
      }
    });

    this.newGameForm = this.formBuilder.group({
      newGame: this.formBuilder.group({
        numberOfPlayers: new FormControl('', [Validators.required])
      })
    });
  }

  createNewGame() {
    const numberOfPlayers = this.newGameForm.get('newGame').get('numberOfPlayers').value;

    this.gameService.createNewGame(numberOfPlayers).subscribe(data => {
      this.gameService.setGameId(data.id);
      this.router.navigate(['/dashboard']);
    });
  }
}
