import {Component,Input} from '@angular/core';
import { Student } from './../../entities/students/student.entity';
import { Primary } from './../../entities/students/primary.student';
import { Secondary } from './../../entities/students/secondary.student';
import {Teacher} from './../../entities/teacher/teacher.entity';
import {TeacherService} from './../../services/teacherService/teacher.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


@Component({
    selector: 'student_component',
    templateUrl: './student.html'
    
})
export class StudentComponent{

    //@Input()
    student:Student=new Student();

    renderStudentDetails:boolean = false;

    teachers:Array<Teacher>=new Array();

    teacherService:TeacherService =new TeacherService();

    setStudentType(type:string){
        this.student.type=type;
        this.renderStudentDetails=true;
        //this.student.getScore();
    }



}