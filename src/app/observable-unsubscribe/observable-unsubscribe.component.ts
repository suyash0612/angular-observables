import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observable-unsubscribe',
  templateUrl: './observable-unsubscribe.component.html',
  styleUrls: ['./observable-unsubscribe.component.css']
})
export class ObservableUnsubscribeComponent {
  counter = interval(1000);
  data1 : number[] = [];
  data2 : number[] = [];
  data3 : number[] = [];
  obs1; 
  obs2; 
  obs3; 

  onSubscribe1(){
    this.obs1 = this.counter.subscribe((val)=>{
      this.data1.push(val);
    })
  }

  onUnSubscribe1(){
    this.obs1.unsubscribe();
  }

  onSubscribe2(){
    this.obs2 = this.counter.subscribe((val)=>{
      this.data2.push(val);
    })
  }

  onUnSubscribe2(){
    this.obs2.unsubscribe();
  }

  onSubscribe3(){
    this.obs3 = this.counter.subscribe((val)=>{
      this.data3.push(val);
    })
  }

  onUnSubscribe3(){
    this.obs3.unsubscribe();
  }

  
}
