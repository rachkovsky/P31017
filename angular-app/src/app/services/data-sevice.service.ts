import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSeviceService {

  constructor(private http: HttpClient) { }

  getBlogList() {
    return this.http.get('/api/blog-list');
  }

  getBlogItemById(id) {
    return this.http.get(`/api/blog-list/${id}`);
  }
}
