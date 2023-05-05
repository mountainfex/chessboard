import { Component } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent {
  column = [1, 2, 3, 4, 5, 6, 7, 8];
  row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
}
