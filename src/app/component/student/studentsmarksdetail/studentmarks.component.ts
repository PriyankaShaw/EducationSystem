import {Component,Input,DoCheck} from '@angular/core';
import { Student } from './../../../entities/students/student.entity';
import {StudentService} from './../../../services/studentService/studentservice';
import {SecondaryService} from './../../../services/studentService/secondary.student.servcie';
import {PrimaryService} from './../../../services/studentService/primary.student.service';
import {TeacherService} from './../../../services/teacherService/teacher.service';

@Component({
    selector:'student-marks',
    templateUrl:'studentmarks.html'
})
export class StudentMarks implements DoCheck{

    @Input()
    student:Student;

    service:StudentService;

    teacherService:TeacherService=new TeacherService();

    ngDoCheck(){
        console.log(this.student.type);
        this.initService();
     }

     initService(){
         if(this.student.type === 's'){
            this.service=new SecondaryService();
        }else{
            this.service=new PrimaryService();
        }
     }

    getScore(){
        this.service.getScore();
    }

}