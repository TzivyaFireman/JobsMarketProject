import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './components/job/job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListService } from './services/job-list.service';
import { LoginService } from './services/login.service';
import { HeaderComponent } from './components/header/header.component';
import { JobService } from './services/job.service';
import { BoldNameDirective } from './directives/bold-name.directive';


const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,// ניתוב ברירת מחדל
  { path: "jobDetails", component: JobDetailsComponent },
  { path: "jobs/:jobField", component: JobListComponent },
  { path: "header", component: HeaderComponent },
  { path: "login", component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobListComponent,
    LoginComponent,
    JobDetailsComponent,
    HeaderComponent,
    BoldNameDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    JobListService,
    LoginService,
    JobService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
