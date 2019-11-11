import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-if',
  template: `
      <div *ngIf="displayName; then ifBlock; else elseBlock"></div>
      <ng-template #ifBlock>
        <h2>If Block</h2>
      </ng-template>
      <ng-template #elseBlock>
        <h2>Else Block</h2>
      </ng-template>
  `,
  styleUrls: ['./test-if.component.css']
})
export class TestIfComponent implements OnInit {
    public displayName=false;
  constructor() { }

  ngOnInit() {
  }

}
