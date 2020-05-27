import { Component, OnInit } from '@angular/core';
import { DataSeviceService } from '../../services/data-sevice.service';
import { BlogItem } from '../../interfaces/blog-item'


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private ds: DataSeviceService) { }

  list: Array<BlogItem> = [];

  ngOnInit(): void {
    this.ds.getBlogList().subscribe((response: Array<BlogItem>) => {
      console.log(response);
      this.list = response;
    })
  }

}
