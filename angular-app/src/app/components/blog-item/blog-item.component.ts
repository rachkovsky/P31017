import { Component, OnInit } from '@angular/core';
import { DataSeviceService } from '../../services/data-sevice.service';
import { ActivatedRoute } from '@angular/router';
import { BlogItem } from '../../interfaces/blog-item'



@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  constructor(private ds: DataSeviceService, private route: ActivatedRoute) { }

  item: BlogItem;

  ngOnInit(): void {
    this.ds.getBlogItemById(this.route.snapshot.params.id).subscribe((res: Array<BlogItem>) => {
      this.item = res[0];
    });
  }

}
