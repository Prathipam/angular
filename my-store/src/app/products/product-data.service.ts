import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductDataService {

  constructor(private _http: HttpClient) { }
  getAllProducts(){
    return this._http.get('../products.json');
  }
}
