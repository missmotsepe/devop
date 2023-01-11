import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-board-component',
  templateUrl: './display-board-component.component.html',
  styleUrls: ['./display-board-component.component.scss']
})
export class DisplayBoardComponentComponent implements OnInit {

  constructor() { }

  @Input() userCount = 0;
@Output() getUsersEvent = new EventEmitter();
ngOnInit(): void {
}
getAllUsers() {
this.getUsersEvent.emit('get all users');
}
}