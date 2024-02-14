import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  ngOnInit(): void {
      const asubject = new AsyncSubject();

      asubject.next(100);
      asubject.subscribe((data)=>{console.log("Subscriber 2 : " + data)})
      asubject.next(200);
      asubject.next(300); // this value will be emitted to all its subscriber
      asubject.subscribe((data)=>{console.log(`Subscriber 1 ${data}`)})
      asubject.complete() // this observable emits the lastest value before the complete signal. 
      asubject.next(400);
      asubject.complete() // this complete signal is ignored. 

  }
}
