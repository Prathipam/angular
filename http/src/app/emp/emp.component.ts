import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp',
  template: `
    <h2>{{ errorMsg }}</h2>
    <div *ngFor="let emp of employees">
          <li>{{ emp.name }}</li>
    </div>
  `,
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public employees=[];
  public errorMsg;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployee()
    .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }

}
