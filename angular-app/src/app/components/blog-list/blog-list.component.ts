import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogItem } from '../../interfaces/blog-item';
import { ActivatedRoute } from '@angular/router';
import { PreloaderService } from '../../services/preloader/preloader.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute, private preloader: PreloaderService) { }

  list: Array<BlogItem> = [];

  ngOnInit(): void {
    this.preloader.hide();
    this.list = this.router.snapshot.data.list;    
  }

  ngOnDestroy() {
    
  }



}
