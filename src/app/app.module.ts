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
import { VideoComponent } from './video/video.component';
import { HomeEvalComponent } from './home-eval/home-eval.component';
import { TransitionComponent } from './transition/transition.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';
const appRoutes: Routes = [
   { path: '', redirectTo : '/home', pathMatch:'full' },{path:'home', component: HomeComponent },{path:'learning',component:LearningCenterComponent},{path:'video',component:VideoComponent},{path:'eval',component:HomeEvalComponent},{path:'transition',component:TransitionComponent},{path:'contact',component:ContactComponent}];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, TopBarComponent, BottomBarComponent, LearningCenterComponent, VideoComponent, HomeEvalComponent, TransitionComponent, ContactComponent, BodyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
