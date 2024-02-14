import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  ngOnInit(): void {
    const rsubject = new ReplaySubject(2,1000); // pass buffer size , time interval to store data

    // Print Initial Values before subscribe 1 and recap for subsciber 1
    // Print Initial Values before subscribe 2 and recap for subsciber 1 & 2
    // Print Initial Values before subscribe 3 and recap for subsciber 1, 2 & 3

    rsubject.next(100);
    rsubject.next(200);
    rsubject.next(300);

    rsubject.subscribe((data)=>{console.log("Subscriber 1 " + data)})
    rsubject.next(2020);
    rsubject.subscribe((data)=>{console.log("Subscriber 2 " + data)})
    rsubject.next(2024);
    rsubject.subscribe((data)=>{console.log("Subscriber 3 " + data)})
    rsubject.next(2026);

  }
}
