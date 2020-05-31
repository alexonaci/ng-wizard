import { Component, OnInit } from '@angular/core';

import { text } from '../text';

@Component({
  selector: 'third-view',
  templateUrl: './third-view.component.html',
  styleUrls: ['./third-view.component.css']
})
export class ThirdViewComponent implements OnInit {

  text = text;

  constructor() { }

  ngOnInit(): void {
  }

}
