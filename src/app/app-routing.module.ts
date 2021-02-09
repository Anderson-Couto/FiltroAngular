import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatefilterComponent } from './Pages/datefilter/datefilter.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'datefilter', component: DatefilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
