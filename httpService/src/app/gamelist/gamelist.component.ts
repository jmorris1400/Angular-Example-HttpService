import { Component, OnInit } from '@angular/core';
import { GameService } from './../gameService';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  public games = [];
  public errorMsg;
  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getGames().subscribe(
      (data) => this.games = data,
      (error) => this.errorMsg = error
    );
  }

}
