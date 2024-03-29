import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ShowtaskComponent } from './showtask/showtask.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { ObservableUnsubscribeComponent } from './observable-unsubscribe/observable-unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent,
    ShowtaskComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    PromiseObservableComponent,
    ObservableUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
