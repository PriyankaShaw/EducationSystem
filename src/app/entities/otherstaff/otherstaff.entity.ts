import {Person} from './../../entities/person/person.entity';
import { Employee } from './../../entities/employee/employee.entity'
export class Otherstaff extends Employee {
  badge: String;

  getBonus():number{
    return 0;
  }
}
