import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//gpt
@Injectable({
    providedIn: 'root'
})
export class JobService {
    counter = localStorage.getItem("numOfCv") as unknown;
    private counterSubject = new Subject<number>();
    counter$ = this.counterSubject.asObservable();

    increment() {
        (this.counter as number)++;
        localStorage.setItem("numOfCv", JSON.stringify(this.counter))
        this.counterSubject.next(this.counter as number);
    }
}
