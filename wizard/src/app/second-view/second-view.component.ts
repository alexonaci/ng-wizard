import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { text } from '../text';

@Component({
  selector: 'second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {

  text =  text;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
