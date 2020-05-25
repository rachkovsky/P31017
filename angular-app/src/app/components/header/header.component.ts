import { Component, OnInit } from '@angular/core';
import { DataSeviceService } from '../../services/data-sevice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ds: DataSeviceService) { }

  text: string = '';

  ngOnInit(): void {
    this.text = this.ds.ololo;
  }

}
