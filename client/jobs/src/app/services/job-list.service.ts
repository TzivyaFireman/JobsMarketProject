import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Job } from '../models/job';

@Injectable()
export class JobListService {

    constructor(private http: HttpClient) {
    }
    getJobsFromServer() : Observable<Job[]> {
        return this.http.get<Job[]>("https://localhost:44337/api/Jobs/GetJobs");
    }

    

}
