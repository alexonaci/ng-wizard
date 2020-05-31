import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() index;
  @Output() next = new EventEmitter;
  @Output() previous = new EventEmitter;
  @Output() smallLinks = new EventEmitter;

  steps = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }


}
