import { Component } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent {
  row = [1, 2, 3, 4, 5, 6, 7, 8];
  column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  newRow: number | null = null;
  newCol: number | null = null;

  showPossibleMoves(possibleRow: number, possibleColumn: string) {
    // alert(possibleRow + possibleColumn);
    this.calculatePossibleMoves(
      possibleRow,
      this.column.indexOf(possibleColumn)
    );
  }

  calculatePossibleMoves(row: number, col: number) {
    const possibleMoves = [];
    const directions = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];
    for (const direction of directions) {
      this.newRow = row + direction[0];
      this.newCol = col + direction[1];
      console.log(this.newRow, this.column[this.newCol]);
    }
  }
}
