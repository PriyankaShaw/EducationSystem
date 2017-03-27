import {StudentService} from './../../services/studentService/studentservice';

export class PrimaryService extends StudentService{

    getScore(): any{
        console.log("primary score");
    }

}  