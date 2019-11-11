import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <div>Inline Template </div>
  <h4>{{ "Welcome " + greet() }} </h4>
  <input bind-id="myId" type="text"  [(ngModel)]="name"/>
  {{ name }}
  <h2 [ngClass] = "messageClass">Welcome to my App</h2>
  <h2 [ngStyle] ="styles">Style Binding</h2>
  <h2>{{ name | uppercase}} </h2>
  <h2>{{ name | lowercase}} </h2>
  <h2>{{ name | titlecase}} </h2>
  <h2>{{ name | slice:3:6}} </h2>
  <h2>{{ person | json}} </h2>
  <h2>{{ 5.678 | number:'3.2-5'}}</h2>
  <h2> {{ 3000 | currency:'USD':'code'}}</h2>
  <h2>{{ dte | date:'short'}}</h2>
  `,
  styles: [`
    div{
    color:red;
    font-size:20px;
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
  font-style:italic;
  }`]
})
export class TestComponent implements OnInit {
  public person={
    "firstName":"Prathipa",
    "lastName":"Mariappan"
  }
  public name = "Prathipa";
  public siteUrl = window.location.href;
  public myId = 'msgType';
  public hasError = true;
  public isSpecial = true;
  public dte = new Date()
  public messageClass={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public styles={
    color:"orange",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }
  greet(){
    return this.name+", Url: "+this.siteUrl;
  }
}
