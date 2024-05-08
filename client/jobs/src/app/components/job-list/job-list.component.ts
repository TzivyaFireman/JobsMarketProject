import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../../models/job'
import { JobListService } from '../../services/job-list.service';
import { JobField } from '../../models/jobField';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  currentUserJobField: string | null = null;
  jobs: Job[] = [];
  filteredJobs: Job[] | null = null;
  areas: string[] | null = [];
  jobFields: string[] | null = [];
  selectedArea: string = '';
  selectedJobField: string = '';

  constructor(private jobListService: JobListService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) {
    jobListService.getJobsFromServer().subscribe((res: Job[]) => {
      this.jobs = res;
      this.getAreas();
      this.getJobFields();
      this.applyAreaFilters();
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentUserJobField = params['jobField'];
      this.filterByJobField(this.currentUserJobField!)
    });
  }


  getAreas() {
    this.jobs.forEach(job => this.areas?.push(job.area));
  }
  getJobFields() {
    this.jobs.forEach(job => this.jobFields?.push(this.getFields(job)));
  }

  getFields(job: Job): string {
    return JobField[parseInt(job.jobField.toString()!, 10)] as string
  }

  applyAreaFilters() {
    if (this.selectedArea) {
      this.filteredJobs = this.jobs.filter(job => job.area === this.selectedArea);
    }
    else {
      this.filteredJobs = this.jobs;
    }

  }


  applyJobFieldFilters() {
    if (this.selectedJobField) {
      this.filteredJobs = this.jobs.filter(job => this.getFields(job) === this.selectedJobField);
    }
    else {
      this.filteredJobs = this.jobs;
    }

  }




  filterByJobField(currentUserJobField: string) {
    if (currentUserJobField != "all")
      this.filteredJobs = this.jobs.filter(job => this.getFields(job) == currentUserJobField)
    console.log(this.filteredJobs);
  }
}

