import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  ngOnInit(){
    // USING OBSERVABLE
    let obs = new Observable((observer)=>{
      observer.next(Math.random())
    })

    // SUBSCRIBER 1
    obs.subscribe((data)=> {+console.log("Observable "+data)});
    // SUBSCRIBER 2
    obs.subscribe((data)=> {console.log("Observable "+data)});

    // USING SUBJECT
    let subject = new Subject();
    // SUBSCRIBER 1
    subject.subscribe((data)=>{console.log("Subject "+data)})
    // SUBSCRIBER 2
    subject.subscribe((data)=>{console.log("Subject "+data)})

    subject.next(Math.random());

    // MAKE AJAX CALL - UNICAST --> multiple diff data returned to all subscribers
    const data = ajax('https://randomuser.me/api/')
    // data.subscribe((response)=>{console.log(response)})
    // data.subscribe((response)=>{console.log(response)})  // API call made thrice in n/w tab
    // data.subscribe((response)=>{console.log(response)})

    // MAKE AJAX CALL - MULTICAST --> single same data returned to all subscribers
    const sub = new Subject();
    sub.subscribe((response)=>{console.log(response)})
    sub.subscribe((response)=>{console.log(response)})  // API call made once in n/w tab
    sub.subscribe((response)=>{console.log(response)})

    data.subscribe(subject);  // subject used as a consumer instead of provider

  }

}
