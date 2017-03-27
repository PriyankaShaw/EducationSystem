import {Person} from './../../entities/person/person.entity';
import { Employee } from './../../entities/employee/employee.entity'
export class Teacher extends Employee {
  qualification: String;

  getBonus():number{
    return 0;
  }
}
