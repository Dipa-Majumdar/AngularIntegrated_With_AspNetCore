import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'add', component: AddComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
