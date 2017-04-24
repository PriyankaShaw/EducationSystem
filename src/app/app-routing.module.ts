import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StudentComponent} from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { OtherstaffComponent } from './component/otherstaff/otherstaff.component';
import { StudentMarks } from './component/student/studentsmarksdetail/studentmarks.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student',  component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'otherstaff', component: OtherstaffComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/