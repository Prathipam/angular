import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return [
      {"id":1, "name":"AAAA","age":40},
      {"id":2,"name":"BBBB","age":25},
      {"id":3,"name":"CCCC","age":30},
      {"id":4,"name":"DDDD","age":45}
    ];
  }
}
