import {StudentService} from './../../services/studentService/studentservice';

export class SecondaryService extends StudentService{

    getScore(): any{
        console.log("seconday score");
    }

}  