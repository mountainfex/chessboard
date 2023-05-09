German

1. Arrays mit Row und Column erstellt, woraus die ngFor das Schachbrett generiert

2. Durch showpossiblemoves wird die jeweilige Position des "clicks" übergeben, daraus werden dann mit Hilfe der Funktion calculatePossibleMoves die möglichen Züge brechnet sowie der URL Parameter gesetzt.

3. Mit NG-Class werden die beiden scss-klassen "highlight", für die möglichen Züge, und "start", für den Startpunkt, den entsprechenden Containern zugeordnet, wenn die funktionen "checkIfPossible" sowie "checkIfStartParam" den Wert "true" ausgeben.

4. ngOnInit sollte den Startpunkt anhand des QueryParameters welcher mit Zeile 24 ausgelesen wird ändern, dies funktionier leider nicht mehr. Mit dem Debugger ist ersichtlich dass es an this.queryStart = params['start'];, welcher nach Änderung des Parameters "undefined" ausgibt, liegt - eine Lösung habe ich dafür nun leider nicht mehr gefunden - damit beschäftige ich mich jedoch derzeit. <br>
<br>
<br>

Englisch
1. Arrays with row and column are created, from which the ngFor generates the chessboard.

2. showpossiblemoves passes the position of the "click", from this the function calculatePossibleMoves calculates the possible moves and sets the URL parameter.

3. With NG-Class the two scss-classes "highlight", for the possible moves, and "start", for the startpoint, are assigned to the corresponding containers, if the functions "checkIfPossible" as well as "checkIfStartParam" return the value "true".

4. ngOnInit should change the start point based on the QueryParameter which is read out with line 24, unfortunately this does not work anymore. With the debugger it is obvious that the reason is this.queryStart = params['start'];, which outputs "undefined" after changing the parameter - unfortunately I haven't found a solution for this anymore - but I'm currently working on it.



# CaseStudyDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
