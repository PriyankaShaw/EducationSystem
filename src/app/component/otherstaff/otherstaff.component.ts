import { Component, Input } from '@angular/core';
import { Employee } from './../../entities/employee/employee.entity'
import {Otherstaff} from './../../entities/otherstaff/otherstaff.entity';
@Component({
    selector: 'otherstaff_component',
    templateUrl: './otherstaff.html'
    
})
export class OtherstaffComponent{

    //@Input()
    otherstaff:Employee = new Otherstaff();

     saveOtherstaff(){
        console.log(" ----  "+this.otherstaff.name);
    }

cancelOtherstaff() {
        this.otherstaff.name = "";
        this.otherstaff.gender = "";
        this.otherstaff.age = null;
        this.otherstaff.phoneNumber = null;
        this.otherstaff.dob = null;
        console.log(" ----  " + this.otherstaff.name);
    }

   
}