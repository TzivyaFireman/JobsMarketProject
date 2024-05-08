import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { Router } from '@angular/router';
import { JobField } from '../../models/jobField';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  jobData: Job | null = null;
  // numOfCv:number = 0;
  @Output() cvSent: EventEmitter<number> = new EventEmitter<number>();

  //gpt
  constructor(private router: Router,private jobService: JobService) {
  }
  // @Input() jobData: Job| null = null
  @Input() set _jobData(value: Job) {
    this.jobData = value;

  }

  getField() {
    return JobField[parseInt(this.jobData?.jobField.toString()!, 10)]
  }
  
  
  viewDetails() {
    this.router.navigate(['/jobDetails'], {
      state: {
        message: {
          fields: this.jobData?.jobField,
          name: this.jobData?.jobName,
          area: this.jobData?.area,
          requirement: this.jobData?.requirements,
          fromHome: this.jobData?.fromHome,
        }
      }
    });
  }


  // sendCv(){
  //   alert(this.getField())
  //   this.numOfCv++;
  //   alert(this.numOfCv)
  //   this.cvSent.emit(this.numOfCv);

  // }

  //gpt
  increment() {
    this.jobService.increment();
  }

}
