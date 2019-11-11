import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You pick red color</div>
        <div *ngSwitchCase="'blue'">You pick blue color</div>
        <div *ngSwitchCase="'green'">You pick green color</div>
        <div *ngSwitchDefault>Please Try again</div>
      </div>
  `,
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  public color="green";
  constructor() { }

  ngOnInit() {
  }

}
