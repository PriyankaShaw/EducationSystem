import {Person} from './../../entities/person/person.entity';

export class Student extends Person {
    marks: number[]=new Array(3);
    type: string;
}