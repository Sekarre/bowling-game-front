import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameService} from '../../services/game.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newgame',
  templateUrl: './new-game.component.html',
})
export class NewGameComponent implements OnInit {

  selected = 2;
  playerCounts: number[] = [];
  newGameForm: FormGroup;

  constructor(private http: HttpClient,
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

      this.newGameForm = this.formBuilder.group({
        user: this.formBuilder.group({
          numberOfPlayers: new FormControl('', [Validators.required])
        })
      });
    });
  }

  createNewGame() {
    const numberOfPlayers = this.newGameForm.get('numberOfPlayers').value;

    this.gameService.createNewGame(numberOfPlayers).subscribe(data => {
      this.gameService.setGameId(data.id);
    });
  }
}
