import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-det',
  template: `
    <h2>Employee Details</h2>
    <div *ngFor="let emp of employees">
      <li>{{ emp.id +"."}}{{ emp.name }}{{"-"+emp.age}}</li>
    </div>
  `,
  styleUrls: ['./emp-det.component.css']
})
export class EmpDetComponent implements OnInit {
  public employees=[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
