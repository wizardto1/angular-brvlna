import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const appRoutes: Routes = [
   { path: '', redirectTo : '/home', pathMatch:'full' },{path:'home', component: HomeComponent }];
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
