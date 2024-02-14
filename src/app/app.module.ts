import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ShowtaskComponent } from './showtask/showtask.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent,
    ShowtaskComponent,
    SubjectComponent,
    BehaviourSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
