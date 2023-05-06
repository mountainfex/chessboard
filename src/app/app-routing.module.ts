import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';

const routes: Routes = [
  { path: 'chessboard/start/:id', component: ChessboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
