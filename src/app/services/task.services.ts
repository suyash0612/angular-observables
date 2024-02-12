import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class TaskService{
    // using services and eventemitter
    // createevent : EventEmitter<string> = new EventEmitter<string>;

    // using subject and observables
    createevent : Subject<string> = new Subject<string>();

    onGetServiceTask(value:string){
        this.createevent.next(value);
    }
}