import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JobField } from "../models/jobField";
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

    user: User = {
        Id: "",
        UserName: "",
        Password: "",
        JobField: JobField.DEVELOPER,
    }

    constructor(private http: HttpClient, private router: Router) {

    }


    getUser(name: string, password: string) {
        this.user = {
            Id: "",
            UserName: name,
            Password: password,
            JobField: JobField.DEVELOPER,
        }

        this.http.post('https://localhost:44337/getUser', this.user).subscribe((res: any) => {
            console.log(res);

            if (res == null)
                alert("the name or the password is not valid!")
            else {
                localStorage.setItem("numOfCv", "0")
                localStorage.setItem("currentUser", JSON.stringify(res));
                this.router.navigate(['/jobs/all']);
            }
        })
    }
}
