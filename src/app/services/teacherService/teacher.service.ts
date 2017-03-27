import {Employee} from './../../entities/employee/employee.entity';
export class TeacherService{

    static teachers:Array<Employee> =new Array();
    static index:number = 0;

    saveTeacher(teacher:Employee){
        console.log("saved ...... "+teacher.name);
        TeacherService.teachers[TeacherService.index]=teacher;
        TeacherService.index++;
    }

    getTeachers():Array<Employee>{
        return TeacherService.teachers;
    }
}