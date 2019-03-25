import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.componet.html',
    styleUrls: ['app/employee/employeeList.componet.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
   
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit(): void {
        this.employees = this._employeeService.getEmployess();
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount() : number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}