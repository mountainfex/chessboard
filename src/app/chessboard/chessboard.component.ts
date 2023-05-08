import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent implements OnInit {
  row: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  column: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  possibleMoves: any[] = [];

  newRow: number | null = null;
  newCol: number | null = null;

  queryStart: string = '';
  queryStartColumn: string = '';
  queryStartRow: number = +'';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.queryStart = params['start'];
      this.queryStartColumn = this.queryStart?.charAt(0).toLowerCase();
      this.queryStartRow = +this.queryStart?.charAt(1);
      if (this.queryStart === undefined) {
        this.setQueryParams(4, 3);
      }
      this.showPossibleMovesOnInit(this.queryStartRow, this.queryStartColumn);
    });
  }

  showPossibleMovesOnInit(queryStartRow: number, queryStartColumn: string) {
    this.calculatePossibleMoves(
      this.row.indexOf(queryStartRow),
      this.column.indexOf(queryStartColumn)
    );
  }

  showPossibleMovesOnClick(
    possibleRow: number,
    possibleColumn: string,
    i: number,
    j: number
  ) {
    this.setQueryParams(i, j);
    this.calculatePossibleMoves(
      this.row.indexOf(possibleRow),
      this.column.indexOf(possibleColumn)
    );
  }

  setQueryParams(i: number, j: number) {
    this.router.navigate(['/chessboard'], {
      queryParams: { start: this.column[i] + this.row[j] },
    });
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
    }
  }

  checkIfPossible(i: number, j: number) {
    if (this.possibleMoves.includes(this.column[i] + this.row[j])) {
      return true;
    } else {
      return false;
    }
  }

  checkIfStartParam(i: number, j: number) {
    if (
      this.queryStartColumn === this.column[i] &&
      this.queryStartRow === this.row[j]
    ) {
      return true;
    } else {
      return false;
    }
  }
}
