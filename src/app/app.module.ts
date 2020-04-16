import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { LearningCenterComponent } from './learning-center/learning-center.component';
const appRoutes: Routes = [
   { path: '', redirectTo : '/home', pathMatch:'full' },{path:'home', component: HomeComponent },{path:'learning',component:LearningCenterComponent}];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, TopBarComponent, BottomBarComponent, LearningCenterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
