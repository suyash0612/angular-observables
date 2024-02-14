import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.css']
})
export class PromiseObservableComponent implements OnInit{
  ngOnInit(){
    const promise = new Promise((resolve , reject)=>{
      console.log("Promise called")  // promise is eager
      resolve(100); // can only emit one value at a time
      resolve(200);
      resolve(300); // always return async data
    })

    promise.then((data)=>{console.log(`promise data ${data}`)})

    const obs = new Observable((observer)=>{
      console.log("Observable called")  // observable is lazy
      observer.next(100); // can emit stream of data once subscribed
      observer.next(200);
      observer.next(300); // return sync / async data
    })

    obs.subscribe((data)=>{console.log(`observable data ${data}`)});   // return data only if subscriber is present
  }
}
