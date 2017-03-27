import { Student } from './../../entities/students/student.entity';
export abstract class StudentService{

    student:Student;

    abstract getScore(): any;

    getTotal(): number {
        let sum: number = 0;
        for (var i = 0; i < this.student.marks.length; i++) {
            sum += +this.student.marks[i];
        }
        console.log(sum);
        return sum;
    }

    getPercentage(): number {
        return this.getTotal() / this.student.marks.length ;
    }

}