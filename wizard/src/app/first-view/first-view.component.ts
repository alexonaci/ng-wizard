import { Component, OnInit } from '@angular/core';

import { text } from '../text';

@Component({
  selector: 'first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  text = text;

  constructor() { }

  ngOnInit(): void {
  }

}
