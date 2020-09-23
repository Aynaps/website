import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CovidAppComponent } from './covid-app/covid-app.component'
import { HomepageComponent } from './homepage/homepage.component'
import { ThiswebappComponent } from './thiswebapp/thiswebapp.component'
import { FireworkSimComponent } from './firework-sim/firework-sim.component';


const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path: 'covidapp', 
    component: CovidAppComponent
  },
  {
    path: 'thiswebapp',
    component: ThiswebappComponent
  },
  {
    path: 'fireworks',
    component: FireworkSimComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
