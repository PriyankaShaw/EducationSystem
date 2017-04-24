import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {StudentComponent} from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { OtherstaffComponent } from './component/otherstaff/otherstaff.component';
import { StudentMarks } from './component/student/studentsmarksdetail/studentmarks.component';

import { AppRoutingModule }     from './app-routing.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    OtherstaffComponent,
    StudentMarks
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
