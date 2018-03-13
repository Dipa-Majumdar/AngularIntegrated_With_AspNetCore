import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'delete/:data', component: DeleteComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:data', component: UpdateComponent },
  { path: 'update', component: UpdateComponent },
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
    AddComponent,
    DeleteComponent,
    UpdateComponent
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
