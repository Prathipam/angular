import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>Welcome {{ name }}</div>
  <button (click)="fireEvent()">Send Event</button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Component Interaction');
  }

}
