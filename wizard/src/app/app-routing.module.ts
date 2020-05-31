import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';


const routes: Routes = [
  {path: 'firstView', component: FirstViewComponent},
  // { path: '', redirectTo: '/firstView', pathMatch: 'full' },
  {path: 'secondView', component: SecondViewComponent},
  {path: 'thirdView',component: ThirdViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
