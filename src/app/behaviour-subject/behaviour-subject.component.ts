import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css']
})
export class BehaviourSubjectComponent implements OnInit {

  ngOnInit(){
    const bsubject = new BehaviorSubject(2020);
    // bsubject.next(2022);
    bsubject.subscribe((data)=>{console.log("SUBSCRIBER 1 : "+data)})  // initial value will be last emitted value
    bsubject.subscribe((data)=>{console.log("SUBSCRIBER 2 : "+data)})
    bsubject.next(2024);
    bsubject.subscribe((data)=>{console.log("SUBSCRIBER 3 : "+data)})
    bsubject.next(2026);


  }
}
