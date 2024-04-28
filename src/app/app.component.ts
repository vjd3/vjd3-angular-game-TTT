import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // You have to import the next segment of Angular code
  // app.component is the highest level
  //    then square.component is the next level
  //        then game-board.component is the next level
  // app.component imports from below to get access to SquareComponent
  imports: [RouterOutlet, SquareComponent], 
  // You can either use the template or the templateUrl property
  // to pass in the html code desired. 
  templateUrl: './app.component.html',
  // The same goes for the css
  styleUrl: './app.component.css'
})
export class AppComponent {
  // The title is a property of the AppComponent, not the HTML Title
  title = 'vjd3-angular-game-TTT';
}
