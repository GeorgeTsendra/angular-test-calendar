import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Task {
    id?: string
    title?: string
    date?: string
}

@Injectable({providedIn: 'root'})
export class TaskService {
    static url = "https://test-angular-calendar2.firebaseio.com//tasks"

    constructor(private http: HttpClient){

    }

    create(task:Task): Observable<Task>{
        return this.http
        .post<any>(`${TaskService.url}/${task.date}.json`, task)
        .pipe(map(res=>{
            console.log(res);
            return res;
        }))
    }
}