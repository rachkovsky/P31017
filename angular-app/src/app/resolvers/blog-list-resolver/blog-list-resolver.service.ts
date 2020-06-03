import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PreloaderService } from '../../services/preloader/preloader.service';

@Injectable({
  providedIn: 'root'
})
export class BlogListResolverService implements Resolve<any> {

  constructor(private http: HttpClient, private preloader: PreloaderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.preloader.show();
    return this.http.get('/api/blog-list');
  }

}
