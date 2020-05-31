import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SecondViewComponent,
    ThirdViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
