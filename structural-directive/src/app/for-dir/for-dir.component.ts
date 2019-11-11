import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-dir',
  template: `
  <div *ngFor="let color of colors;index as i;first as f;last as l;odd as o;even as e">
    <h2>{{i}}{{" "+f+" "+l+" "+o+" "+e}}{{" "+color}}</h2>
  </div>
  `,
  styleUrls: ['./for-dir.component.css']
})
export class ForDirComponent implements OnInit {
  public colors=["red","blue","green","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
