import { ChangeDetectorRef, Component } from '@angular/core';
import { JobListService } from '../../services/job-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { JobField } from '../../models/jobField';
import { Observable } from 'rxjs';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'jobs';
  currentUserDetails: any =
    {
      userName: "",
      jobField: JobField.DEVELOPER,
    }
  //gpt
  numOfCv: Observable<number> | null = null;


  //gpt
  constructor(private router: Router,
    private jobListService: JobListService,
    private jobService: JobService,
    private cdr: ChangeDetectorRef) {

  }

  //gpt
  ngOnInit() {
    this.numOfCv = this.jobService.counter$;
    this.getCurrentUserDetails();

  }

  // onInit(){
  //   this.getcurrentUserDetails()
  // }
  getCurrentUserDetails() {
    const userData: string | null = localStorage.getItem("currentUser");
    this.currentUserDetails = JSON.parse(userData!);
    // this.numOfCv = this.jobService.counter as number;
    // const numOfCvAsString = localStorage.getItem("numOfCv")
    // this.numOfCv = numOfCvAsString as Observable<number>;
    console.log("ll"+this.currentUserDetails);
  }
  // loadNumOfCv(){
  //   this.numOfCv = localStorage.getItem()
  // }
  getField() {
    return JobField[parseInt(this.currentUserDetails?.jobField.toString()!, 10)]
  }

  navigateToJobs() {
    this.router.navigate(['/jobs/', this.getField()]);
  }

  navigateToLogin() {
    this.router.navigate(['/login/']);
  }


  // updateNumOfCv(num: number) {
  //   this.numOfCv = num;

  // }
}
