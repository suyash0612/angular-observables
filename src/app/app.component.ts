import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';

  data : any[] = [];

  // OBSERVABLE - create a new observable - EVENT EMITTER (next event emitted)

  myObservable = new Observable((observer) =>{
    // observer.next([1,2,3,4,5]);

    //Streaming Of data
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
  });

  // OBSERVER - this is the observer for above observable - EVENT LISTENER (any event listened)
  // whenever new data will be emitted from observable , this part of code will be notified
  getAsyncData(){
    // callback fn -> next / error / complete event
    this.myObservable.subscribe((val : any)=> {
      // this.data = val;
      this.data.push(val);            // this part is the handler where we pass the data
    });
  }


}
