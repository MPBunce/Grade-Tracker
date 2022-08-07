import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddGradeComponent } from './components/grades/add-grade/add-grade.component';
import { GradesComponent } from './components/leaderboard/grades/grades.component';


const appRoutes: Routes = [
  {path: 'allGrades', component: GradesComponent},
  {path: '', component: AddGradeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddGradeComponent,
    GradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true }),
  ], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }