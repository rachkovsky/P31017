import { Component, OnInit, Input } from '@angular/core';
import { DataSeviceService } from '../../services/data-sevice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ds: DataSeviceService) { }

  @Input() list: any = [];
  
  isTitleVisible: boolean = false;

  testInput: string = 'defaul value';

  customDate = new Date();

  onInput() {
    console.log(this.testInput)
  }

  onClickListEl(e) {
    console.log('clicked ', e.target);
  }

  public ngOnInit(): void {
    this.ds.getTodos().subscribe((res) => {
      this.list = res;
      console.log(res);
    })
  }

}
