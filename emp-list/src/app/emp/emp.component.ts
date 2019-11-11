import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-emp',
  template: `
    <div *ngFor="let emp of employees">
      <li>{{ emp.name }}</li>
    </div>
  `,
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public employees=[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
