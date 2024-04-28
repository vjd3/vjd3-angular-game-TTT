# Vjd3AngularGameTTT

This project was created by Val Dauterive for a class on Angular. Angular guides on Angular.io were key in solving numerous issues in the process of learning Angular. Thank you!

`ng new vjd3-angular-game-TTT`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. 

`ng generate component square --inline-template --skip-tests`
and
`ng generate component game-board --inline-template --skip-tests`

This was used to create the `square` and `game-board` components. This does NOT add the necessary import lines to the `app.component.ts` or the `square.component.ts` files as the generate command is run. That code was added after each generate was completed.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. This was used in testing to force clean builds of the app to ensure the most recent code was being used before running the serve command.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
