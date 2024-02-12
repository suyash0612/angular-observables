import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, count, filter, from, map, of } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
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
      observer.error(new Error('Something went wrong, please try again later!'));  
    }, 3000);          //after error event -> no data is emitted indicating data stream is done (high priority than complete event)
    setTimeout(() => {
      observer.next(4);
    }, 5000);
    setTimeout(() => {
      observer.next(5);
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 3000);     // after complete event -> no data is emitted indicating data stream is done
  });

  // OBSERVER - this is the observer for above observable - EVENT LISTENER (any event listened)
  // whenever new data will be emitted from observable , this part of code will be notified

  getAsyncData(){

    //##  Deprecated  ##//

    // // callback fn -> next / error / complete event
    // this.myObservable.subscribe((val : any)=> {
    //   // this.data = val;
    //   this.data.push(val);            // this part is the handler where we pass the data
    // },
    // (err:any) => {
    //   alert(err.message)
    // },
    // () => {
    //   alert("all data is streamed.")
    // }
    // );

    //##  New  ##//
    this.myObservable.subscribe({
      next : (val:any) => {                      // arrow fn points to outer scope where data is actually located
        this.data.push(val);                    // else the scope was within the suscribe()
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert("all data is streamed.");
      }
    } 
    );



  }

  // fROMEVENT 
  btnObservable : any;
  @ViewChild('createitemref')
  btnForObs! : ElementRef;

  
  ngAfterViewInit(){
    this.buttonClick();
  }

  buttonClick(){
    let count = 0;
    this.btnObservable = fromEvent(this.btnForObs.nativeElement,'click')
  .subscribe((item)=>{
    console.log(item);
    this.createDiv(++count);
  });
  }

  createDiv(count: number){
    let div = document.createElement('div');
    div.innerHTML = 'Item ' + count;
    div.className = 'data-list';
    let ele = document.getElementById('data-id');
    ele?.appendChild(div);
  }

  // of Operator

  ofObs = of([1,2,3,4,5],[6,7,8,9,10],20,'a',true);

  promise = new Promise((resolve , reject)=>{
    resolve([10,20,30,40,50]);
  })

  fromObs = from(this.promise);

  Obs = from([10,20,30,40,50,60])
  
  transformedObs_withmap = this.Obs.pipe(map((val : any)=>{
    return val * 5;
  }))

  transformedObs_withfilter = this.Obs.pipe(filter((val:any)=>{
    return val%4===0;
  }))
  
  // Together first perfomr map on array then filter on the result
  transformedObs_withmapfilter = this.Obs.pipe(
    map((val : any)=>{
      return val * 5;
    }),
    filter((val:any)=>{
    return val%4===0;
  }))

  // shortcut

  myTransObs = from([1,2,3,4,5,6,7,8]).pipe(map((val)=>{
    return 2 * val ;
  }))

  getDataFromOfOperator(){
    alert('Of Operator')
    this.ofObs.subscribe({
      next : (val : any) =>{
        console.log(val);
      },
      error : (er)=>{
        alert('Error Generated' + er);
      },
      complete : ()=>{
        alert("all event completed")
      }
    })
    alert('From Operator')
    this.fromObs.subscribe({
      next : (val : any) =>{
        console.log(val);
      },
      error : (er)=>{
        alert('Error Generated' + er);
      },
      complete : ()=>{
        alert("all event completed")
      }
    })

    this.transformedObs_withmap.subscribe({
      next : (val) =>{
        console.log('Map');
        console.log(val);
      }
    })
    this.transformedObs_withfilter.subscribe({
      next : (val) =>{
        console.log('Filter');
        console.log(val);
      }
    })
    this.transformedObs_withmapfilter.subscribe({
      next : (val) =>{
        console.log('Map & Filter');
        console.log(val);
      }
    })
    this.myTransObs.subscribe({
      next : (val) =>{
        console.log('Shortcut');
        console.log(val);
      }
    })


  }


}
