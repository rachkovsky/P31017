import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSeviceService {

  constructor(private http: HttpClient) { }

  public ololo: string = "Abc";
  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
