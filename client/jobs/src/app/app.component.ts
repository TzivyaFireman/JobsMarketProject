import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { JobListService } from './services/job-list.service';
import { LoginService } from './services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { User } from './models/user';
import { JobField } from './models/jobField';
import { JobListComponent } from './components/job-list/job-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobs';
  constructor(private router: Router, private jobListService: JobListService) {
    if (localStorage.getItem("currentUser") == null) {
      this.router.navigate(['/login']);
    }
  }
  isUserLoggedIn(): boolean {
    // בדוק אם יש נתונים בלוקל סטורייג
    const userData: string | null = localStorage.getItem("currentUser");
    // אם יש נתונים, משתמש מחובר
    return userData !== null;
  }

}
