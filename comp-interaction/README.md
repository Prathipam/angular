#To do list for component Interaction
1. Sending data from parent to child using Input decorator
  public name="Prathipa" in app.component
  app.html
  <app-child [parentData]="name"></app-child>
  child.component
    @Input('parentData') public name; import the input decorator

2. Sending data from child to parent can be done by using EventEmitter and output decorator
  child.component.ts
  <button (click)="fireEvent()">Send Event</button> - template
    @Output() public childEvent = new EventEmitter(); - object creation for EventEmitter
    fireEvent(){
      this.childEvent.emit('Component Interaction');
    }

    app.html
      <app-child (childEvent)="title=$event" [parentData]="name"></app-child>
    create variable in app.component class and import the output and EventEmitter

# CompInteraction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
