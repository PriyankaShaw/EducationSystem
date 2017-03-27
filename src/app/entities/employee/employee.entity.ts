import {Person} from './../../entities/person/person.entity';


export abstract class Employee extends Person {
  salary: number;

  abstract getBonus(): number;
}

