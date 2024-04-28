// 
// src/app/square/square.component.ts
// Angular imports
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { GameBoardComponent } from '../game-board/game-board.component';

// define the square component and import the GameBoardComponent
// to connect the lower branch of code, as well as identify
// the html and css files
@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NgIf, NgFor, GameBoardComponent],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

// This is the class for the square component and must be imported
// in the app.component.ts. The class is exported here and contains
// the main methods and variables for the game.
export class SquareComponent {
  square : any =[]
  xIsNext = true;
  champion ='';
  counter = 0;
  gameDraw='';
  newPage=true;

  constructor(){
  }

  // start the game, initialize the variables
  // and set the newPage variable to false so
  // the game can be played.
  startGame(){
    this.square= Array(9).fill(null);
    this.champion='';
    this.gameDraw=''
    this.counter=0;
    this.newPage=false;
  }

  // get the current player, just flips back and forth
  get getPlayer(){
    return this.xIsNext? 'X':'O';
  }

  // make the move and increment the counter
  // there are 9 possible moves in the game
  // 0 to 8, with the 9th meaning the game is over.
  // If the game ends without a winner (champion), 
  // it is a draw.
  makeMove(index:number){
    if(index==9){
      this.gameDraw='Draw';
      this.xIsNext=true;
      return
    }

    if(!this.square[index]){
      this.square.splice(index,1,this.getPlayer);
      this.xIsNext=!this.xIsNext;
      this.counter++;
    }

    this.champion= this.findChampion()

    if(!this.champion && this.counter==9){
      this.gameDraw='Draw'
    }
  }

  findChampion(){

    //grid positions are:
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // These are the winning position sets
    // For example, [0,1,2] is a winning set if a 
    // player has 3 in a row across the top
    const lines=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    for (let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(this.square[a] && this.square[a]===this.square[b]
        && this.square[a]===this.square[c]) {
          return this.square[a];
        }
    }

    return null;

  }
  
}
