import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent {
  row: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  column: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  possibleMoves: any[] = [];
  previousEvent: any = null;

  newRow: number | null = null;
  newCol: number | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  showPossibleMoves(
    possibleRow: number,
    possibleColumn: string,
    event: Event,
    i: number,
    j: number
  ) {
    this.activatedRoute.paramMap.pipe();
    this.router.navigate(['/start=' + this.column[i] + this.row[j]]);

    this.previousEvent?.classList.remove('start');
    this.previousEvent = event.target as HTMLElement;
    this.previousEvent.classList.add('start');

    this.calculatePossibleMoves(
      this.row.indexOf(possibleRow),
      this.column.indexOf(possibleColumn)
    );
  }

  calculatePossibleMoves(row: number, col: number) {
    this.possibleMoves = [];
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
      this.possibleMoves.push(this.column[this.newCol] + this.row[this.newRow]);
      // console.log(this.row[this.newRow] + this.column[this.newCol]);
    }
  }

  checkIfPossible(i: number, j: number) {
    if (this.possibleMoves.includes(this.column[i] + this.row[j])) {
      return true;
    } else {
      return false;
    }
  }
}
