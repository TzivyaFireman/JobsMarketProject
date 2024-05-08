import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobField } from '../../models/jobField';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  jobData: any;


  constructor(private router: Router) {
    this.jobData = history.state.message;
  }


  getField() {
    return JobField[parseInt(this.jobData?.fields.toString()!, 10)]
  }
}
