import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {

  @Input() value : 'X' | 'O' | undefined
}
