// Angular imports
import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

// src/app/game-board/game-board.component.ts
// main component for the game board
//   contains the game board buttons
// standalone is required because the higher
//   level components are also standalone
// html and css are linked via individual files
@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
// the GameBoardComponent class implements the game board buttons
// it must be importen in the higher level component square.component.ts
export class GameBoardComponent {
  @Input() value : 'X' | 'O' | undefined
}
