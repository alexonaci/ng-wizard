import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wizard';

  index = 1;

  goToLink(selectedIndex: number) {
    this.index = selectedIndex;
  }
}
