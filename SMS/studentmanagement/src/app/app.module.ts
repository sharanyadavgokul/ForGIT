import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentPerformanceGraphComponent } from './student-performance-graph/student-performance-graph.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { TransportManagementComponent } from './transport-management/transport-management.component';
import { FeesManagementComponent } from './fees-management/fees-management.component';
import { AttendanceSystemComponent } from './attendance-system/attendance-system.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { TeachersManagementComponent } from './teachers-management/teachers-management.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { SchoolGalleryComponent } from './school-gallery/school-gallery.component';
import { EmailComponent } from './email/email.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { studentDetail } from './shared-services/studentdetail.service';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
// import { FilterPipe } from './models/filter.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';


const appRoutes:Routes=[
  {path:'',redirectTo:'/', pathMatch:'full'},
  {path:'student',component:StudentComponent},
  {path:'student-regis',component:StudentRegistrationComponent},
  {path:'student-details',component:StudentdetailsComponent},
  {path:'stud-performance',component:StudentPerformanceGraphComponent},
  {path:'stud-info',component:StudentinfoComponent},
  {path:'class-timetable',component:ClassTimetableComponent},
  {path:'lib-manage',component:LibraryManagementComponent},
  {path:'transport',component:TransportManagementComponent},
  {path:'fee-manage',component:FeesManagementComponent},
  {path:'attendance',component:AttendanceSystemComponent},
  {path:'notice-board',component:NoticeBoardComponent},
  {path:'teachers-manage',component:TeachersManagementComponent},
  {path:'staff-manage',component:StaffManagementComponent},
  {path:'school-gallery',component:SchoolGalleryComponent},
  {path:'email',component:EmailComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'admin',component:AdminComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    StudentPerformanceGraphComponent,
    ClassTimetableComponent,
    LibraryManagementComponent,
    TransportManagementComponent,
    FeesManagementComponent,
    AttendanceSystemComponent,
    NoticeBoardComponent,
    TeachersManagementComponent,
    StaffManagementComponent,
    SchoolGalleryComponent,
    EmailComponent,
    AboutusComponent,
    FeedbackComponent,
    NavbarComponent,
    TeachersComponent,
    StudentComponent,
    AdminComponent,
    StudentdetailsComponent,
    StudentinfoComponent,
    
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [studentDetail],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
