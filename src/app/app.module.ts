import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidAppComponent } from './covid-app/covid-app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThiswebappComponent } from './thiswebapp/thiswebapp.component';
import { FireworkSimComponent } from './firework-sim/firework-sim.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidAppComponent,
    HomepageComponent,
    ThiswebappComponent,
    FireworkSimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
