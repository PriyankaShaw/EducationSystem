import { Component, Input } from '@angular/core';
import { Employee } from './../../entities/employee/employee.entity'
import {Teacher} from './../../entities/teacher/teacher.entity';
import {TeacherService} from './../../services/teacherService/teacher.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';



@Component({
    selector: 'teacher_component',
    templateUrl: './teacher.html'

})
export class TeacherComponent {

    //@Input()
    teacher: Employee = new Teacher();

    teacherService:TeacherService=new TeacherService();

    saveTeacher() {
        console.log(" ----  " + this.teacher.name);
        this.teacherService.saveTeacher(this.teacher);
    }

    cancelTeacher() {
        this.teacher.name = "";
        this.teacher.gender = "";
        this.teacher.age = null;
        this.teacher.phoneNumber = null;
        this.teacher.dob = null;
        console.log(" ----  " + this.teacher.name);
    }

    

}